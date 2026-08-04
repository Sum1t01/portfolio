# Portfolio — context for future sessions

Personal portfolio site for Sumit Kumar Gupta, built with React 19 + Vite + Tailwind v4.

## Who this is for

Sumit Kumar Gupta — Software Engineer L2 at Shipsy (Gurugram, India), based in Kathmandu, Nepal.
Android/Kotlin specialist: Jetpack Compose, Kotlin Multiplatform / Compose Multiplatform, Spring Boot backend.
B.Tech Computer Engineering from Delhi Technological University (GPA 9.13/10), minor in Machine Learning.

Full CV content (source of truth for resume data) lives outside this repo — the LaTeX resume was pasted
into the conversation that set up the content sections. If resume data needs updating, ask the user for
the latest version rather than assuming the content below is current.

Contact: sg065387@gmail.com · [GitHub](https://github.com/Sum1t01) · [LinkedIn](https://np.linkedin.com/in/sumit-gupta-814879189) · [LeetCode](https://leetcode.com/u/Sum1t01/)
Phone number is intentionally omitted from the public site. The email address itself is also intentionally
kept out of the rendered page — see "Contact form" below.

## Single source of truth for content

All resume data and site copy lives in `src/data/profile.js` — `profile`, `bio`, `experience`, `education`,
`projects`, `skills`, `publications`, `achievements`, `extracurricular`, `nav`, `socials`, `highlights`,
and `content` (every heading/eyebrow/button label/placeholder in the UI). **Components must not hardcode
copy** — import from this file. Icon *components* (e.g. which lucide/react-icons icon renders for a given
social link or About highlight) stay in the consuming component via a small `{key: Icon}` lookup, since
icon choice is a rendering concern, not content — `profile.js` stays plain data with no React imports.

## Contact form

Contact section is a real form (name/email/message), not an exposed `mailto:` link — the user explicitly
asked for the email address not to appear as plain text on the page. It submits to
[Web3Forms](https://web3forms.com) via a plain `fetch` POST in `src/sections/Contact.jsx` (no SDK). The
access key is read from `import.meta.env.VITE_WEB3FORMS_ACCESS_KEY`, set in `.env.local` (gitignored via
the existing `*.local` pattern) — `.env.example` documents the variable. **`.env.local` currently has a
placeholder value (`your-access-key-here`)** — the form will hit Web3Forms' API and fail gracefully (shows
`content.contact.errorMessage`) until the real key is filled in. Get one free, no account/password needed,
at web3forms.com.

## Design direction — "motion-led minimal" (final, restored)

This design went through several rejected detours — a warm parchment "renaissance/editorial" system
(serif type, drop caps, roman numerals) and a plain generic "basic portfolio" rebuild (Inter, blue accent,
no personality) — before landing back on the **first** direction built this session, which the user
ultimately preferred. **This is the settled direction — do not re-propose alternate design systems
unless the user explicitly asks to change direction again.**

Principles:
- **Near-flat palette, one accent.** Background `#0a0a0a`, foreground `#f4f3ee` (warm off-white, not pure
  white), accent `#d7ff3d` (lime/chartreuse) used sparingly. No glass/blur/glow effects.
- **Single typeface.** Space Grotesk (Google Fonts, loaded in `index.html`) at multiple weights. No serif
  anywhere, no font-pairing games.
- **Interest comes from motion, not decoration**: custom cubic-bezier easing (`--ease-premium` in
  `index.css`), scroll-triggered reveals via IntersectionObserver (`Reveal.jsx`), cursor-reactive magnetic
  buttons (`Magnetic.jsx`), and a custom mix-blend-difference cursor dot (`CursorDot.jsx`, desktop/fine-pointer
  only — disabled on touch, uses a lazy `useState` initializer rather than `setState` inside the effect body
  to avoid the React "set-state-in-effect" lint warning).
- Small border radius (`--radius: 0.25rem`), not pill-shaped everything.
- Bordered card grids with `gap-px bg-border` (single hairline between cells) are the standard pattern for
  About's highlight cards and Projects' project cards.

**Copy rules the user gave explicitly — these persist regardless of visual direction:**
- The Hero headline is just the first name ("Sumit") — role/specialty details belong in the tagline
  underneath (`content.hero.tagline`), not the headline itself.
- The Hero tagline should emphasize mobile development (primary) and Machine Learning/Deep Learning/
  Computer Vision (elaborated, richly described) over backend/Spring Boot (kept brief) — the user
  explicitly asked for ML to be weighted more heavily than backend.
- Section headings must be direct and plain ("About", "Where I've worked", "Things I've built") — avoid
  vague two-clause poetic headlines. The user specifically called out "Four years, one platform I keep
  coming back to" as confusing; don't repeat that pattern anywhere.
- When given brief bullet-point facts for a section (e.g. About's highlight cards), elaborate and enhance
  into fuller, specific prose using real details already established elsewhere in the data — don't just
  restate the bullets verbatim.

When adding new sections or components, stay inside this system rather than reaching for defaults:
- No `backdrop-blur` beyond the nav's subtle scrolled state, no glowing text-shadow, no floating particle fields.
- Wrap section entrances in `<Reveal>` instead of static `animation-delay` classes where practical.
- Wrap interactive buttons/links in `<Magnetic>` where it fits (primary CTAs, social icons) — not
  every element, that dilutes the effect.
- Reuse `.eyebrow` / `.underline-link` utility classes from `index.css` for section labels and nav-style links.

## Structure

- `src/App.jsx` — mounts `CursorDot` + `NavBar` + section components in order.
- `src/layout/NavBar.jsx` — fixed nav, driven by the `nav` array in `src/data/profile.js`.
- `src/sections/*.jsx` — one file per section (Hero, About, Projects, Experience, Achievements, Contact).
- `src/components/` — shared primitives (`Button`, `AnimatedBorderButton`, `Reveal`, `Magnetic`, `CursorDot`).
- `src/data/profile.js` — single source of truth for all resume data and site copy (see above).
- `.claude/launch.json` — dev server config (`npm run dev`, port 5173) for browser preview tooling.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run lint` — ESLint
