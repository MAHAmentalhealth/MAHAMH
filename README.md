# MAHA Mental Health Field Guide

An eight-page static site based on the MAHA Mental Health Hub draft. The design uses a deep blue foundation, cobalt accents, plum, cream, muted gold, and a typographic mark.

## Pages

- `index.html` — vision and routes through the guide
- `evidence.html` — informed decisions, drug information, withdrawal, and other approaches
- `support.html` — peer and community support
- `organizations.html` — searchable, filterable directory
- `policy.html` — issue areas and primary public sources
- `giving.html` — the clearly identified ICI donation route
- `listing-application.html` — directory listing application
- `funding-application.html` — funding consideration application

`styles.css`, `app.js`, and `favicon.svg` are shared assets. `build.py` contains the page copy and layout; run `python build.py` after editing it to regenerate the HTML. The site works on GitHub Pages without running Python at deployment.

## Publish updates to GitHub Pages

Commit **all eight HTML files, `styles.css`, `app.js`, and `favicon.svg`** to the root of the `MAHAMH` repository. GitHub Pages is already configured to deploy from `main / (root)`. Do not upload the ZIP alone or put the files in a nested folder. `build.py` and this README are optional in the repository, but useful for later edits.

## Donation arrangement

The header and primary donation buttons link directly to ICI's dedicated MAHA Mental Health Givebutter campaign at `https://givebutter.com/maha-mental-health-gvp1bu`. ICI receives, manages, and receipts donations. Confirm institutional attribution and donation language with ICI and MAHA before promoting the site as an official joint initiative.

There are no bank account details in this repository. Bank payout information belongs in ICI's authenticated Givebutter/Stripe Connect account, never in GitHub source code. An authorized ICI finance administrator can review the existing payout method in Givebutter's **Finance/Payouts → Settings**. The dedicated campaign URL is defined in `build.py` and used throughout the generated pages. If it changes, update `DONATE_URL` and the other page links, regenerate, and upload the HTML files.

## Editorial maintenance

The 21 directory entries in `app.js` include the organizations and programs named for review in the supplied hub draft, plus ICRI, Hearing Voices Network USA, Intentional Peer Support, and Surviving Antidepressants. Each card explains the group’s work and its relevance to the guide. The directory does not represent a formal partner list. Verify each link, description, and current program with ICI before an official launch. For tapering links, review the full destination before inclusion: the guide selects resources describing progressively smaller reductions of no more than 10% of the most recent dose over about a month, with slower pacing or holds as needed. Do not add resources that recommend larger cuts as a starting option. Policy status belongs at primary sources linked on `policy.html`. Delilah is linked as an optional bill tracker; Regulations.gov is the source for agency rulemaking. The page does not claim to operate its own live tracker. Review the public pages regularly and maintain a correction/removal process. Directory inclusion is not a claim of partnership or endorsement.

There are two new, separate forms on this site. The directory links to `listing-application.html`; the giving page links to `funding-application.html`. They collect different information and must have distinct submission endpoints. The public funding paragraph describes the coalition fund as a goal and clearly identifies current donations as going to ICI. The award process is not yet open; applications may be submitted for future consideration, and the page should be updated when governance and allocation details are approved.

## Form submissions

GitHub Pages cannot receive form submissions itself. The two forms are connected to separate Formspree endpoints, provided by the site owner: `listing-application.html` posts to `https://formspree.io/f/xljdabkv`, and `funding-application.html` posts to `https://formspree.io/f/xzezyrql`. Their Submit buttons are enabled. After upload, send one test submission through each live page and verify it arrives in the correct Formspree dashboard and notification inbox; then delete the tests. Check that notifications go to the people responsible for reviewing each type of application.

Formspree's free plan currently permits two notification email addresses and starts at 50 submissions per month. Its hosted endpoint processes the form and stores submissions in the account; assign access to the appropriate ICI/MAHA reviewers. Applicants are asked not to submit sensitive health information. If an endpoint changes, update the two constants near the top of `build.py`, regenerate the HTML, and test again.

## Policy page maintenance

The bill spotlight gives two dated examples from official state legislative sources. Check statuses and text before publishing or updating the snapshot. Examples do not imply MAHA Institute endorsement. The state funding section describes a future brief format; it does not list a current funding recommendation. The Institute and HHS links establish context but do not make this guide an official government resource.
