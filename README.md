# Stephania Nevado's Portfolio

![][badge-ts] ![][badge-react] ![][badge-next] ![][badge-tw] ![][badge-nextintl] ![][badge-vitest]

I could have created this portfolio with some online template or no-code solution — but I didn't want to do that 🤓 Instead, I've used this portfolio as a way to showcase my skills and way of coding.

If you have a look inside this repository you'll find a well-organized, linted and strictly formatted project with a proper light / dark / system theme, full internationalization (English / Spanish / Swedish), and a real test suite.

The code is formatted with [Prettier](.prettierrc.json) and linted with [ESLint](eslint.config.mjs).

---

## Stack

- [**Next.js 16**](https://nextjs.org) — App Router, Turbopack dev, static pre-render per locale
- [**React 19**](https://react.dev) + **TypeScript 5.9**
- [**Tailwind CSS v4**](https://tailwindcss.com) — CSS-first `@theme` tokens, `class` dark mode
- Light / dark / system theme via CSS variables and a small `ThemeProvider`
- [**next-intl v4**](https://next-intl.dev) — locale-prefixed routing (`/en`, `/es`, `/sv`), per-locale metadata + `hreflang`
- [**Vitest**](https://vitest.dev) + [**React Testing Library**](https://testing-library.com/react) + jsdom
- Local font: [Clash Display](https://www.fontshare.com/fonts/clash-display) via `next/font/local`

---

## Starting this app locally 🚀

### Prerequisites

1. Install [Node][node].
2. Install [npm][npm].

### Running

- Install dependencies: `npm i`
- Run the app locally: `npm run dev` — open [`http://localhost:3000`](http://localhost:3000) (redirects to `/en`)
- Typecheck: `npm run typecheck`
- Lint: `npm run lint`
- Production build: `npm run build`

---

## Testing 🧪

Powered by [Vitest](https://vitest.dev) + [React Testing Library](https://testing-library.com/react) + jsdom.

```sh
npm test              # single-run
npm run test:watch    # watch mode
npm run test:coverage # v8 coverage report (text + html + lcov)
```

Coverage output lands in `coverage/` (gitignored). The suite currently covers:

- Utilities: `cn`, `buildStyle` (padding/margin shorthand expansion, animation-name mapping, 4px multiplier)
- Interactive components: `Accordion`, `Button`, `ThemeToggle`, `LocaleSwitcher`, `Menu`, navigation `Items`
- i18n safety net: `test/i18n-keys.test.ts` asserts `messages/es.json` and `messages/sv.json` have the same key set as `en.json` — catches missing translations before they ship

The suite is stable across 5 consecutive runs and completes in ~4s locally.

---

## Internationalization 🌐

Three locales: **English** (default), **Spanish**, **Swedish**.

- URLs are locale-prefixed (`/en/about`, `/es/about`, `/sv/about`)
- English is the hard default — visiting `/` always redirects to `/en` regardless of `Accept-Language`
- Language + theme controls live in the header (desktop) and split between the hamburger menu (language) + footer (theme) on mobile
- Translations live in [`messages/`](./messages) — one JSON file per locale, keyed by page/domain

---

[badge-ts]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white
[badge-react]: https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB
[badge-next]: https://img.shields.io/badge/Next.js-000000?logo=nextdotjs&logoColor=white
[badge-tw]: https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=white
[badge-nextintl]: https://img.shields.io/badge/next--intl-4B0082?logo=nextdotjs&logoColor=white
[badge-vitest]: https://img.shields.io/badge/Vitest-6E9F18?logo=vitest&logoColor=white
[npm]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[node]: https://nodejs.org/en/download
