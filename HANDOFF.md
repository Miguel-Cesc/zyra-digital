# Handoff — Zyra website rebuild

Paste this whole file as the first message of a new Claude Code session, with
this folder connected. Everything needed is below; nothing depends on the
session that produced it.

---

## Where you are

**Working directory:** `~/Documents/GitHub/zyra-digital-rebuild`
**Branch:** `rebuild-ad-positioning` (one commit ahead of `main`)
**Remote:** `https://github.com/Miguel-Cesc/zyra-digital.git` — Miguel owns it, admin rights
**Stack:** Next.js 14 App Router, TypeScript, Tailwind, Framer Motion

Run it: `npm install && npm run dev`. Production check: `npm run build && npx next start -p 3112`.

There is a second clone at `~/Documents/GitHub/zyra-digital` whose remote is
`ibetjaimes8-cmyk/zyra-digital` (Ibeth's copy). **Ignore it.** It holds the old
site. Both repos have identical history; Miguel's is not a fork, just an
independent copy he controls.

## What the site is now

The old site sold websites, hosting and SEO. It now sells what Zyra actually
does: ad creative made for you, and the media buying behind it.

Page order in `app/page.tsx`:

`Hero, Reel, Ticker, HowItWorks, Demos, WhyAI, Ticker, Pricing, Proof, About, FAQ, FinalCTA, Contact`

| File | What it does |
|---|---|
| `components/Hero.tsx` | Aurora hero. Headline, sub, two CTAs, three stats (24hr / 100+ / $0) |
| `components/Demos.tsx` | Exports `Reel` (full-bleed scrolling ad strip under the hero) and `Demos` (the six-demo grid). Both read the same `DEMOS` array |
| `components/Ticker.tsx` | Auto-scrolling claim strip. Exports `TICKER_TOP` / `TICKER_MID` — **plain data lives here, not in `Sections.tsx`** (see gotcha below) |
| `components/Sections.tsx` | `HowItWorks`, `WhyAI`, `About`, `FinalCTA` |
| `components/StepArt.tsx` | The four mockup panels beside the how-it-works rows |
| `components/Pricing.tsx` | First month + three plans |
| `components/Proof.tsx` | Past client results. **Renders nothing** — `RESULTS` is empty on purpose |
| `components/ui.tsx` | `Cta`, `Chip`, `Tick`. The shared vocabulary |
| `lib/faqs.ts` | Single source for FAQ copy. Both the accordion and the JSON-LD read it |
| `app/guarantee/page.tsx` | Full guarantee terms. Still live and linked from the footer, but pulled off the homepage and out of the top nav: the guarantee is pitched per lead in outbound email now |

## Rules this site is built under — do not quietly break these

- **No founder name anywhere.** Credibility is "a small team", 30+ accounts, Google Ads and Meta. No PhD, no personal name.
- **No stock icon set.** The `Spark` is the only mark. Section labels are a rule plus a word. Only the hamburger and the FAQ plus remain, because they are controls.
- **Never fabricate a number, a testimonial or a client.** This is why `Proof` is empty and why the demo mockups carry no words or figures.
- **No real brand names or logos in any demo.** Categories and formats only.
- **The demo clips are Pixabay AI footage, not Zyra's work, and the page must keep saying "example footage".** The Pixabay Content License forbids "giving the impression that Content was created by you". The reel caption and the Demos copy carry that wording on purpose. Keep it until every tile is something Zyra made. Sources and the QA each clip passed are listed above `DEMOS` in `components/Demos.tsx`.
- **Australian spelling.** "optimisation", not "optimization".
- **Plain language.** If a sentence could sit unchanged on any agency's site, cut it.
- **Not "sprint".** It is "your first month".
- **No en or em dashes in any rendered copy.** Rewrite the sentence or use brackets. Hyphens in words like "AI-made" are fine.
- **24 hours, not 48.** Every turnaround claim on the site says 24.
- **Say it is AI.** The positioning is an AI creative company: new ads monthly, many angles tested, none of the production cost. Do not soften that back into a generic agency voice.
- **Contact address is `miguel@zyradigital.org`.**

## Deploying

**The Vercel project is connected to `Miguel-Cesc/zyra-digital`** (connected 8 September 2026, verified by a push that built on its own).

- Vercel project `zyra-digital` (`prj_dtnQ9jpDiWqD5NVpLIj6N5qWOvvp`) is owned by `miguel-cesc's projects`. `zyradigital.org`, `www.zyradigital.org` and `zyra-digital.vercel.app` are all verified on it.
- Production branch is `main`. **A push to `main` deploys to the live domain.** Every other branch gets a preview build automatically.
- Live production is still commit `fb6a51a`, the first commit, until something newer reaches `main`. Commit `3ee2ea2` "Harden deployment security" has never been deployed, confirmed by `curl -sI https://zyradigital.org` returning no `content-security-policy` header.
- `.vercel/project.json` points at the production project, so a bare `vercel --prod` from this folder still goes straight to the live domain. There is no reason to run it now that pushes work.
- The old clone at `~/Documents/GitHub/zyra-digital` (remote `ibetjaimes8-cmyk/zyra-digital`) is still not connected to anything. Ignore it.

## Gotchas that will cost you an hour each

1. **Plain data cannot be exported from a `"use client"` module and imported by a server component.** `TICKER_TOP` lives in `Ticker.tsx` for this reason. Moving it back into `Sections.tsx` fails the build with "Cannot read Symbol exports".
2. **The dev server needs `'unsafe-eval'` in the CSP or it will not hydrate.** `next.config.js` adds it in development only; production stays strict. If the page renders but nothing is interactive, check the console for a CSP error.
3. **Scroll-reveal animations do not fire in headless screenshots**, so captures come back blank below the fold. To screenshot the whole page, temporarily force `const reduced = true` in `components/Reveal.tsx`, build, capture, then revert.
4. **Prices are confirmed and live.** `$2,000` first month, then `$1,500` / `$3,000` / `$4,500`, signed off 9 September 2026. They are on the public site now, so changing one is a commercial decision, not a copy edit.
5. **Demo clips go through `scripts/encode-demo.sh`**, never straight into `public/`. It crops to 4:5, caps the bitrate and writes a poster; a raw source is 5 to 30 MB. Tiles play through `LazyVideo`, which only fetches a clip once it is on screen. Measured: the first screen downloads 134 KB of stills and no video, largest paint under a second. Swapping a clip is a data change in `DEMOS`.

## Background, if you need more

- `~/Desktop/Zyra/.scratch/client-one/map.md` — every decision made about this business, with reasoning
- `~/Desktop/Zyra/.scratch/website-rebuild/spec.md` — the original build spec
- `~/Desktop/Zyra/legal/` — contracts and policies; the site must not contradict them

---

## What I want you to do

Deploy a preview and give me the URL, then make the changes below.

### Changes

<!-- Write what you want changed here. Anything you leave blank, skip. -->

-
-
-

### Still open from last session

- [x] **Prices.** Confirmed 9 September 2026 and live.
- [ ] **Proof section.** If you want real client results on the page, give me the figure, the account it came from, the window it was measured over, and confirmation the client is happy for it to appear. Even unnamed, "an Australian garden retailer" is identifiable to anyone in that category.
- [ ] **24-hour turnaround** is now claimed sitewide. It is a promise you would be held to, so confirm the automation actually delivers in 24.
- [x] **100+ businesses** confirmed, and set in figures rather than words as of 23 August 2026.
- [x] **Vercel/GitHub connection.** Wired 8 September 2026. `main` is production, every other branch gets a preview.
