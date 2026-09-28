# MAHA Mental Health Field Guide

A six-page static site based on the MAHA Mental Health Hub draft. The design draws on MAHA Center's cream, charcoal, and copper language, then uses forest green, plum, a typographic mark, and an editorial layout to give this guide its own identity.

## Pages

- `index.html` — vision and routes through the guide
- `evidence.html` — informed decisions, drug information, withdrawal, and other approaches
- `support.html` — peer and community support
- `organizations.html` — searchable, filterable directory
- `policy.html` — issue areas and primary public sources
- `giving.html` — the clearly identified ICI donation route

`styles.css`, `app.js`, and `favicon.svg` are shared assets. `build.py` contains the page copy and layout; run `python build.py` after editing it to regenerate the HTML. The site works on GitHub Pages without running Python at deployment.

## Publish updates to GitHub Pages

Upload **all six HTML files, `styles.css`, `app.js`, and `favicon.svg`** to the root of the `MAHAMH` repository and commit. GitHub Pages is already configured to deploy from `main / (root)`. Do not upload the ZIP alone or put the files in a nested folder. `build.py` and this README are optional in the repository, but useful for later edits.

## Donation arrangement

The header and primary donation buttons link directly to ICI's dedicated MAHA Mental Health Givebutter campaign at `https://givebutter.com/maha-mental-health-gvp1bu`. ICI receives, manages, and receipts donations. Confirm institutional attribution and donation language with ICI and MAHA before promoting the site as an official joint initiative.

There are no bank account details in this repository. Bank payout information belongs in ICI's authenticated Givebutter/Stripe Connect account, never in GitHub source code. An authorized ICI finance administrator can review the existing payout method in Givebutter's **Finance/Payouts → Settings**. The dedicated campaign URL is defined in `build.py` and used throughout the generated pages. If it changes, update `DONATE_URL` and the other page links, regenerate, and upload the HTML files.

## Editorial maintenance

The 21 directory entries in `app.js` include the organizations and programs named for review in the supplied hub draft, plus ICRI, Hearing Voices Network USA, Intentional Peer Support, and Surviving Antidepressants. Each card explains the group’s work and its relevance to the guide. The directory does not represent a formal partner list. Verify each link, description, and current program with ICI before an official launch. For tapering links, review the full destination before inclusion: the guide selects resources describing progressively smaller reductions of no more than 10% of the most recent dose over about a month, with slower pacing or holds as needed. Do not add resources that recommend larger cuts as a starting option. Policy status belongs at primary sources linked on `policy.html`. Delilah is linked as an optional bill tracker; Regulations.gov is the source for agency rulemaking. The page does not claim to operate its own live tracker. Review the public pages regularly and maintain a correction/removal process. Directory inclusion is not a claim of partnership or endorsement.

The **Apply for a listing** link opens ICI's existing contact form, which accepts resource suggestions. The **Apply for funding consideration** link on `giving.html` uses the same form but asks for a distinct subject and funding details. These are two separate requests routed through one existing ICI intake form. ICI must monitor and triage them. Neither is an on-site form or an established grant application workflow. Replace these links with dedicated forms when available. The public funding paragraph describes the coalition fund as a goal and clearly identifies current donations as going to ICI; update its governance and allocation language when the fund is established.
