@AGENTS.md

## Design direction

The web design must be **as bold as the tone of voice** — direct, opinionated, no decorative fluff. Think Oatly, not a nature NGO brochure.

### Tone
- Pub, not boardroom. Self-aware, a bit funny, always honest.
- Dutch throughout.

### Colors
- Background: forest green `#2e3b29`
- Primary text: cream `#fff8ee`
- Accent: tan `#a1865e`
- Use high contrast. Don't soften things with opacity unless intentional hierarchy.

### Typography
- Display / headlines: **Syne** weight 800 — big, tight leading, fills the screen
- Body: **Space Grotesk** — clean, geometric, readable
- Go large. The type is the design. Don't be timid with sizes.

### Design principles
- Content is the design — no decorative illustrations, no leaf icons, no stock-photo greens
- Editorial layouts — asymmetric, full-bleed, confident
- Whitespace is intentional, not padding for padding's sake
- Buttons are bold and screamy — they match the tone of voice, not a SaaS product. Large padding, extrabold weight, wide letter-spacing, fully uppercase. Only solid background colors — no outlined/ghost buttons. Primary: bg-tan, text-cream. Secondary: bg-forest, text-cream. Hover swaps between the two. No icons or arrows in button labels.
- Use `ButtonLink` (renders `<a>`) for navigation and `Button` (renders `<button>`) for actions — both live in `app/components/Button.tsx` and share the same visual styles via the internal `styles()` helper.
- No greenwashing aesthetics. This brand actively rejects that visual language.

## Workflow

Do not start the dev server or take browser screenshots to verify UI changes. The user handles visual QA themselves.

