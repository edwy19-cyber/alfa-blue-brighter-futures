# Make every site image a real file in the repository

## Findings (no code changed)

**alfa-blue-logo-t2.png**
1. Referenced in `src/routes/index.tsx` line 6 (`import logoT2 from "@/assets/alfa-blue-logo-t2.png.asset.json"`), used line 64 as `logoT2.url` = `/__l5e/assets-v1/426bdb57-.../alfa-blue-logo-t2.png`.
2. The image itself is not in the project. Only a small pointer file exists: `src/assets/alfa-blue-logo-t2.png.asset.json`.
3. Yes - stored in Lovable's hosted storage. The `/__l5e/...` address only works on Lovable hosting, so Hostinger cannot find it.
4. Not deleted or renamed. Added as a hosted pointer in commit 955941d (Round 2 revisions) and unchanged since.

**teens-dreaming-of-a-greener-future.jpg**
1. Referenced in `src/routes/index.tsx` line 7 (`import dreams from "@/assets/teens-dreaming-of-a-greener-future.jpg.asset.json"`), used line 78 as `dreams.url` = `/__l5e/assets-v1/1db4c506-.../teens-dreaming-of-a-greener-future.jpg`.
2. Only the pointer `src/assets/teens-dreaming-of-a-greener-future.jpg.asset.json` exists.
3. Yes - Lovable hosted storage, same limitation.
4. Not deleted or renamed. Added in commit 93018db (vision picture replacing quote text).

**Same issue also affects:** `ahmed-edwy-portrait.jpg` (About page) and `safeguarding-policy.pdf` (Safeguarding download), plus unused pointers (about-boardroom, alfa-blue-logo-horizontal/vertical/wide, alfa-blue-mark, eaf-certified-badge, linkedin-icon, partnerships-meeting).

**5. GitHub sync:** I cannot see the connection from here. The project tracks `main` on its remote; this copy is working in a draft branch, which reaches GitHub only when accepted. Check Project settings -> Git for connection, branch and "ahead/behind" status.

## Plan
1. Download each in-use hosted file (logo-t2, teens artwork, Ahmed portrait, safeguarding PDF) byte-for-byte from Lovable storage.
2. Save them as real files: `public/images/alfa-blue-logo-t2.png`, `public/images/teens-dreaming-of-a-greener-future.jpg`, `public/images/ahmed-edwy-portrait.jpg`, `public/docs/safeguarding-policy.pdf` (same names, no re-saving).
3. Change only the image addresses in `index.tsx`, `about.tsx` and `safeguarding.tsx` to those `/images/...` and `/docs/...` paths. Size, position, alt text and styling unchanged.
4. Remove the now-unused pointer files (keep the hosted copies so older versions still work).
5. Update the safeguarding test to check the real PDF file, and add a test that every image path used by pages exists in `public/` or `src/assets/`.
6. Record in AGENTS.md: site media lives as real files in the repo so external builds work (replacing the hosted-pointer rule).
7. You confirm GitHub sync in Project settings -> Git, then rebuild on Hostinger.
