# Copilot instructions

Project context Copilot should apply to every session in this repository.

## Stack

- Framework: Astro (static output).
- Language: TypeScript.
- Styling: plain CSS in the base layout.

## Conventions

- Keep components small and focused.
- Prefer semantic HTML and accessible markup.
- Use TypeScript for application logic and follow Astro's component conventions.
- Keep user-facing text clear and concise; preserve the existing Mona's Bookmark Manager terminology.
- Do not close, or add closing keywords for, the exercise walkthrough issue (issue #1) in any pull request. The exercise's GitHub Actions workflows manage that issue. When you open a pull request for app work, link only the specific app work-item issue you are implementing.

## Build and development

- Use Node.js 22.12 or newer.
- Install dependencies with `npm ci`.
- Run `npm run dev` to develop locally at the configured Astro port.
- Run `npm run build` before submitting changes to verify the static production build.
- Use `npm run preview` to inspect the generated build locally.

## Styling

- Keep styling in the existing plain CSS in `src/layouts/Base.astro` unless a component-specific style is clearly justified.
- Reuse the existing CSS custom properties, fonts, spacing, focus states, and light/dark color scheme.
- Preserve responsive behavior and keyboard-visible focus indicators.
- Prefer semantic HTML and accessible labels, names, button text, and live-region behavior over styling that conveys meaning alone.

## Persistence and hydration

- Bookmarks are persisted in the browser with `localStorage`; save the original URL and generated slug together and restore them on page load.
- Keep the storage key and stored data shape stable. Handle missing, malformed, or unavailable stored data without crashing the page.
- Browser-only APIs such as `localStorage`, `window`, `document`, and `navigator.clipboard` must run only in client-side code.
- Put browser-dependent logic behind an Astro `client:load` boundary when using a hydrated component, or inside an inline `<script>` in an `.astro` component. Never access browser APIs from frontmatter or other code that runs during the static build.
- Keep the app's static output buildable without a browser environment; validate URL input and update the rendered list without full-page reloads.
