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

`Hero → Reel → Ticker → GuaranteePromise → HowItWorks → Demos → Toolkit → Ticker → Pricing → Proof → About → FAQ → FinalCTA → Contact`

| File | What it does |
|---|---|
| `components/Hero.tsx` | Aurora hero. Headline, sub, two CTAs, three stats (48hr / 0 hours of your time / $0) |
| `components/Demos.tsx` | Exports `Reel` (full-bleed scrolling ad strip under the hero) and `Demos` (the six-demo grid). Both read the same `DEMOS` array |
| `components/Ticker.tsx` | Auto-scrolling claim strip. Exports `TICKER_TOP` / `TICKER_MID` — **plain data lives here, not in `Sections.tsx`** (see gotcha below) |
| `components/Sections.tsx` | `GuaranteePromise`, `HowItWorks`, `Toolkit`, `About`, `FinalCTA` |
| `components/StepArt.tsx` | The four mockup panels beside the how-it-works rows |
| `components/Pricing.tsx` | First month + three plans |
| `components/Proof.tsx` | Past client results. **Renders nothing** — `RESULTS` is empty on purpose |
| `components/ui.tsx` | `Cta`, `Chip`, `Tick`. The shared vocabulary |
| `lib/faqs.ts` | Single source for FAQ copy. Both the accordion and the JSON-LD read it |
| `app/guarantee/page.tsx` | Full guarantee terms, own page |

## Rules this site is built under — do not quietly break these

- **No founder name anywhere.** Credibility is "a small team", 30+ accounts, Google Ads and Meta. No PhD, no personal name.
- **No stock icon set.** The `Spark` is the only mark. Section labels are a rule plus a word. Only the hamburger and the FAQ plus remain, because they are controls.
- **Never fabricate a number, a testimonial or a client.** This is why `Proof` is empty and why the demo mockups carry no words or figures.
- **No real brand names or logos in any demo.** Categories and formats only.
- **Australian spelling.** "optimisation", not "optimization".
- **Plain language.** If a sentence could sit unchanged on any agency's site, cut it.
- **Not "sprint".** It is "your first month".
- **Contact address is `miguel@zyradigital.org`.**

## Deploying — read this before you touch it

**Neither GitHub repo is connected to Vercel.** This was verified, not assumed:

- Vercel project `zyra-digital` (`prj_dtnQ9jpDiWqD5NVpLIj6N5qWOvvp`) is owned by **`miguel-cesc's projects`**, not Ibeth's account.
- `zyradigital.org`, `www.zyradigital.org` and `zyra-digital.vercel.app` are all verified on that project.
- The project's `link` field is absent and **no GitHub integration is installed** on the Vercel account. `git push` deploys nothing, to either repo.
- All six deployments show `source: cli` — hand-pushed with `vercel --prod` on 3 May 2026. Five errored; the sixth is what is live.
- The `ibetjaimes8-cmyk/zyra-digital` name on those deployments is just the git remote of the folder the CLI ran from. It is metadata, not a connection.
- **Live production is commit `fb6a51a`, the first commit.** Commit `3ee2ea2` "Harden deployment security" was never deployed — confirmed independently: `curl -sI https://zyradigital.org` returns no `content-security-policy` header.

`.vercel/project.json` in this folder points at that production project. **A bare
`vercel --prod` from here goes straight to the live domain.** Deploy to a preview
first and show Miguel the URL:

```bash
cd ~/Documents/GitHub/zyra-digital-rebuild && npx vercel
```

Only promote to production once he has looked at the preview and said yes.
The better long-term fix is connecting the Vercel project to
`Miguel-Cesc/zyra-digital` so `main` becomes the source of truth — that needs
the GitHub app installed on his Vercel account, which is a browser step he does
himself.

## Gotchas that will cost you an hour each

1. **Plain data cannot be exported from a `"use client"` module and imported by a server component.** `TICKER_TOP` lives in `Ticker.tsx` for this reason. Moving it back into `Sections.tsx` fails the build with "Cannot read Symbol exports".
2. **The dev server needs `'unsafe-eval'` in the CSP or it will not hydrate.** `next.config.js` adds it in development only; production stays strict. If the page renders but nothing is interactive, check the console for a CSP error.
3. **Scroll-reveal animations do not fire in headless screenshots**, so captures come back blank below the fold. To screenshot the whole page, temporarily force `const reduced = true` in `components/Reveal.tsx`, build, capture, then revert.
4. **Prices are not signed off.** `$2,000` first month, then `$1,500` / `$3,000` / `$4,500`. These are a recommendation from ticket 12 in `~/Desktop/Zyra/.scratch/client-one/issues/`. Do not deploy them to production until Miguel confirms.
5. **The demo videos do not exist yet.** `DEMOS` entries have no `src`, so each tile renders an abstract mockup. Adding real clips is a data change: set `src` and `poster` and the `<video>` renders instead.

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

- [ ] **Prices** — confirm or correct the four numbers before anything goes to production.
- [ ] **Proof section** — if you want real client results on the page, give me the figure, the account it came from, the window it was measured over, and confirmation the client is happy for it to appear. Even unnamed, "an Australian garden retailer" is identifiable to anyone in that category.
- [ ] **24-hour turnaround** — the site says 48 hours everywhere. If the automation genuinely delivers in 24, say so and I will change it. It is a promise you would be held to.
- [ ] **Vercel/GitHub connection** — decide whether to wire `Miguel-Cesc/zyra-digital` to the Vercel project so pushes deploy themselves.
