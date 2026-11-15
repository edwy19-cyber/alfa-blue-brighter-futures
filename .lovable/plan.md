# Hostinger logo diagnosis (no changes)

## Verified findings
1. **Main includes the logos.** `origin/main` (e7981ae) `src/routes/index.tsx` lines 124 and 128 render `/images/logiscool-logo.png` and `/images/alfa-blue-h-logo.png` in the Delivery Model list.
2. **Image files are committed on main:** `public/images/logiscool-logo.png` (blob cd0e8cf) and `public/images/alfa-blue-h-logo.png` (blob a261587). They are real files, not hosted pointers.
3. **Build config should include them.** The workflow copies `.github/static/vite.config.ts` (prerender on, crawlLinks, autoSubfolderIndex) and uploads `.output/public/`. `public/` files are copied there, and `/` is prerendered to `index.html` with both `<img>` tags. Note: `failOnError: false` means a failed prerender still gives a green build.
4. **Deploy is manual only** (`workflow_dispatch`). Pushing to main does not deploy anything by itself.

## Most likely reason an older version stays live
The FTP-Deploy-Action only uploads what it *thinks* changed. It compares against a `.ftp-deploy-sync-state.json` file stored on the server. If that file doesn't match what is actually there (because of earlier manual uploads, a different folder, or an old `index.html`), changed files can be skipped and the old `index.html` stays in place. Hostinger's LiteSpeed/CDN cache, or browser cache, can also keep serving old HTML.

## Diagnostic checks
1. GitHub, Actions: confirm the latest "Deploy to Hostinger" run used commit `e7981ae` (shown in the run header). If not, run it again manually.
2. In the run's build log, search for `Prerendering` and check that `/` (index.html) is listed with no errors.
3. In the FTP step log, check whether `index.html`, `images/logiscool-logo.png` and `images/alfa-blue-h-logo.png` show as uploaded or "skipped/unchanged".
4. Visit `https://alfablueme.com/images/logiscool-logo.png` and `/images/alfa-blue-h-logo.png`. If you get a 404, the files were never uploaded.
5. Run `curl -s https://alfablueme.com/ | grep -c logiscool-logo`. A result of 0 means the live HTML is old. Repeat with `?nocache=1` to rule out caching.
6. Hostinger File Manager: open `public_html/index.html` and check its modified date and whether it contains `logiscool-logo`. Also check for `.ftp-deploy-sync-state.json` and for a stray `public_html/public_html/` folder or a leftover `.htaccess`/`index.php`.
7. Hostinger hPanel: purge the LiteSpeed/CDN cache, then hard-refresh the browser.
8. If the sync state is stale, the usual fix (when you approve one) is to delete `.ftp-deploy-sync-state.json` on the server, or to set `dangerous-clean-slate: true` for one run.
