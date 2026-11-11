# Site review against your checklist — findings and fix plan

## Already passing (from reading the site's content)
- Every button says "Collaborate With Us" (header, Home, closing banner on each page), and each one opens /contact. No "Partner With Us" is left.
- The only email shown anywhere is ReachUs@alfablueme.com.
- No NGO, charity or sponsor is named. UNICEF, World Bank and OECD appear only as research sources.
- No prices, tiers, cost-per-student figures or "donate" wording. The How Sponsorship Works and About pages say plainly that ALFA BLUE does not handle funds.
- /approach, /how-sponsorship-works and /safeguarding all exist. The footer and the Partnerships & Impact "Learn more" row both link to them.
- /impact redirects to /approach.
- Every external link (World Bank, Logiscool, UNICEF and the research sources) opens in a new tab with rel="noopener noreferrer".
- The Financial Literacy page presents literacy as the mission and inclusion as the long-term outcome ("Financial literacy today, financial inclusion tomorrow").
- Every page's sharing tags (og: and twitter:) are built into its page head.

## Issues found — numbered fixes
1. **/sponsor does not redirect.** There is no /sponsor address, so it shows a "page not found" error. Fix: make /sponsor redirect to /how-sponsorship-works and add a test for it.
2. **Wording on Partnerships & Impact suggests measuring impact.**
   - "Programme design … and success measures"
   - The "Impact evaluation" step: "Delivery partners measure learning outcomes against agreed indicators…"
   - The analytics panel: "…measure learning gains against agreed indicators"
   Fix: reword all three so they clearly describe the delivery partner's own work, with no "impact evaluation" or "indicators" wording. For example, rename the step "Partner reporting: delivery partners report on their programmes directly to their own sponsors."
3. **Leftover draft file with bracketed blanks.** An older copy of the long policy document is still stored in the project. It contains [Name], [date], [phone] and [Number]. The live Safeguarding page no longer uses it, so visitors can't see it. Fix: delete it so the blanks can't come back by accident.
4. **Safeguarding PDF not uploaded.** The page correctly shows "Available on request" for now. No fix needed until you send the PDF; then I'll turn on the download button.
5. **Browser checks to run during the fix step.** These can only be confirmed with the site open in a browser:
   - The cookie banner appears, your choice is remembered after a reload, and footer "Cookie settings" reopens it.
   - The header, footer, LinkedIn, Logiscool and office photos look sharp at 375px, 768px and 1280px widths. I'll take screenshots and fix any that look blurry or stretched.
   - The Home page source contains the og: and twitter: tags.
   I'll report anything that fails and fix it.
6. **Reminder (not a code fix):** Lovable's built-in visitor statistics run whether or not someone accepts cookies. Either switch them off in project settings or soften the cookie wording in the Privacy Statement.

## Technical notes
- Fix 1: add a src/routes/sponsor.tsx redirect, following the same pattern as impact.tsx, plus a routing test.
- Fix 2: edit the text only, at lines 44, 47 and 102 of src/routes/partnerships.tsx.
- Fix 3: delete src/content/safeguarding-policy.md, which nothing uses any more.
- Fix 5: check with Playwright at three viewport widths and use curl to read the Home page source.
