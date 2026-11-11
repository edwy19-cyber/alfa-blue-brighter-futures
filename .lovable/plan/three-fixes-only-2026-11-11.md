# Three fixes only

## 1. Redirect /sponsor
Make /sponsor redirect permanently to /how-sponsorship-works, the same way /impact already redirects. No test, as you asked.

## 2. Partnerships & Impact wording

| | Before | After |
|---|---|---|
| a | "Select curriculum, delivery model, educator training and success measures." | "Select curriculum, delivery model, educator training and quality standards." |
| b (title) | "Impact evaluation" | "Partner reporting" |
| b (text) | "Delivery partners measure learning outcomes against agreed indicators and report to their own sponsors." | "Delivery partners report on their programmes directly to their own sponsors." |
| c | "This allows delivery partners to establish a reliable baseline before a programme starts and to measure learning gains against agreed indicators at the end." | "This allows delivery partners to establish a reliable baseline before a programme starts. Delivery partners can use the platform's built-in assessments to follow learners' progress." |
| d (needs your OK) | "Needs assessment and impact evaluation are supported by a K-12 education-technology partner…" | "Needs assessment and progress tracking are supported by a K-12 education-technology partner…" |

Row d is a sentence your list didn't cover. It still says "impact evaluation", so without this change the page would fail your rule. If you'd rather have different wording, tell me before approving.

After the edits I'll search the page to confirm "impact evaluation", "indicators" and "success measures" no longer appear.

## 3. Delete the leftover draft policy
- The file to delete is the project's stored text copy of the long draft policy, not /docs/safeguarding-policy.pdf. That PDF has never been uploaded.
- Already checked: no page links to the draft copy or uses it. The only safeguarding links point to the /safeguarding page and the future PDF address.

## Not included
You attached a Safeguarding Policy PDF with your message. Your instructions didn't mention it, so I won't add it now. If you want it on the site, ask and I'll save it as the download so "Available on request" becomes "Download our Safeguarding Policy (PDF)".

## Technical notes
- New file: src/routes/sponsor.tsx. It uses a beforeLoad redirect with statusCode 301 to /how-sponsorship-works.
- Edits to src/routes/partnerships.tsx: the pathway array, plus the analytics-panel paragraphs at about lines 99 and 102.
- Delete src/content/safeguarding-policy.md.
- No browser or Playwright checks, as you asked. I'll only check that the site still builds and the existing tests pass.
