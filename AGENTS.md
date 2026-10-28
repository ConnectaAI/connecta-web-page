# AGENTS.md — Tzij brand identity

Instructions for AI coding agents working in this repository or applying the Tzij brand in other projects. Human-facing rationale lives in `README.md`; this file is the operational rulebook. When the two disagree, the CSS variables defined in `src/App.css` win for values and this file wins for rules.

Status: **v0.3 draft**. Typography, color and the small graphic kit below are defined. Do not invent other identity elements (logo symbols, patterns, illustrations, taglines). Project progress and pending work live in `TZIJ_STATUS.md`.

## Source of truth

- Tzij colors are CSS custom properties (`--tzij-pino`, `--tzij-lago`, …) declared in `src/App.css`, next to the Connecta variables, following the same scheme the site already uses. There is no `tokens.json`, no generated `build/` output and no token-generation script; do not add one.
- Tzij pages scope the palette under a `.tzij-theme` wrapper so it never leaks into the rest of the site.
- Never hardcode hex values or font names in components or page stylesheets. Use `var(--tzij-…)` for Tzij colors and the existing `--font-display`, `--font-ui`, `--font-mono` for type. Hex values appear only where the variables are declared.
- Connecta brand elements keep Connecta's own colors everywhere else on the site: the Connecta logo, the navbar, the footer and the shared contact section (`--blue-*`, `--stone-*`). Tzij colors apply to Tzij content.
- **Exception, confirmed by the owner (2026-10-20):** on `/tzij` and `/en/tzij` the navbar, the contact section and the footer use their own Tzij theme (`--tzij-*`, inside `.tzij-theme`), so the page does not clash with the rest of Tzij. This is a Tzij-only variant: the Connecta pages keep the Connecta versions. The Connecta logo stays as the brand mark (recolored by theme, never redrawn).

## Typography

Tzij uses the same type system as the Connecta site.

| Role | Variable | Font |
|---|---|---|
| Display (wordmark, headings) | `--font-display` | Fraunces |
| Text & UI | `--font-ui` | Geist |
| Labels, numbering, captions | `--font-mono` | Geist Mono |

Rules:

- Fonts are loaded once in `index.html` through the existing Google Fonts link (Fraunces, Geist, Geist Mono). Do not add other font sources or per-page font links.
- Do not introduce new fonts unless a human asks. Any new font must be SIL OFL (or equivalently permissive) and render the modifier letter apostrophe U+02BC with normal letter spacing. Verify the glyph before proposing it:
  ```bash
  python3 -c "from fontTools.ttLib import TTFont;import sys;print(0x2BC in TTFont(sys.argv[1]).getBestCmap())" FONT.ttf
  ```
- Known **rejected** fonts, never use: DM Sans, Manrope, Plus Jakarta Sans, Sora, Figtree, Atkinson Hyperlegible (no U+02BC); Work Sans, IBM Plex Sans (U+02BC badly spaced).
- Noto Sans and Andika, mentioned in v0.1, are not part of the current scheme.

## Look and feel

Tzij pages follow the editorial style of the Connecta landing, not a separate visual language:

- Editorial layout: large Fraunces headlines, generous whitespace, hairline borders, numbered sections (`01`, `02`…) with a small uppercase Geist Mono label, dot-grid backgrounds.
- Micro animations in the same spirit as the landing: scroll reveals through the existing `Reveal` component, subtle hover lifts, a drawn timeline line, a slow marquee. Always respect `prefers-reduced-motion`.
- Buttons and links never use fixed widths (see Practical constraints).

## Graphic kit (approved 2026-10-20)

The identity is the territory as data: every line and point on a Tzij page is real Guatemalan terrain (Copernicus DEM GLO-30), never decoration.

- **Two strokes:** a fine line (1px) and a master line (2px), like contour and index contours. Used for rules, underlines, borders and the relief itself.
- **Marca de cota:** a single `--tzij-maiz` point with a ring, at most one per view (hero, stage 01, footer). It is also the hover state of the consortium rows. Never use maíz as text on light backgrounds.
- **Cota in mono:** section numbers and image captions in `--font-mono`, with a short master dash before the number (`.tzij-cota`). Only real data in captions; no invented figures.
- **One ink per surface:** each surface uses a single ink plus its grain (`tzij-grain.webp` on obsidiana and pino, `tzij-footer-grain.webp` on niebla). No gradients or shadows.
- **Motion:** lines draw in once, on first view (`useDrawIn`), and the point ripples on hover. Always respect `prefers-reduced-motion`.
- Do not sequence the four brand colors by elevation (it can echo the colors tied to the four directions) and do not turn the relief into a logo shape. Favicon and social image studies exist in the design canvas but are **on hold**: do not ship them without the owner's go-ahead.

## Glottal stop: always `ʼ` (U+02BC)

- Write Mayan-language text with the modifier letter apostrophe `ʼ` (U+02BC): `Kʼicheʼ`, `Qʼeqchiʼ`, `chʼabʼal`, `tzʼibʼ`.
- Never write `K'iche'` (U+0027) or `K’iche’` (U+2019) in UI strings, docs, filenames for display, or data you generate.
- When processing external text, normalize apostrophe-like characters that follow a letter (`'` U+0027, `’` U+2019, `‘` U+2018, `´` U+00B4, `` ` `` U+0060) to U+02BC:
  ```ts
  export const normalizeGlottal = (s: string) =>
    s.replace(/(?<=\p{L})['’‘´`]/gu, "ʼ");
  ```
  ```python
  import re
  APOS = re.compile(r"(?<=[^\W\d_])['’‘´`]")
  normalize_glottal = lambda s: APOS.sub("ʼ", s)
  ```
- Known edge case: a closing quote right after a word (`'hola'`) is also converted. Flag mixed Spanish/Mayan text for review instead of silently normalizing it in training corpora.
- Do not "fix" U+02BC back to a regular apostrophe, even if a linter, spellchecker or formatter suggests it.
- Do not invent or translate Kʼicheʼ or Qʼeqchiʼ text. Use only words provided by humans or existing approved content, and mark any placeholder clearly as such.

## Color

| Variable | Hex | Role |
|---|---|---|
| `--tzij-pino` | `#2F5D50` | Primary |
| `--tzij-lago` | `#2B5F7E` | Secondary |
| `--tzij-barro` | `#A54A29` | Accent |
| `--tzij-maiz` | `#E2AA33` | Highlight |
| `--tzij-piedra` | `#6E695F` | Muted text |
| `--tzij-obsidiana` | `#1E1C1A` | Ink / dark background |
| `--tzij-niebla` | `#F6F2EA` | Paper / light background |

Rules:

- **Never use `maiz` for text on light backgrounds** (1.9:1). Use it on `obsidiana`, or for non-text highlights and icons.
- All text must meet WCAG AA (4.5:1 normal, 3:1 large). On `niebla`, every color except `maiz` passes. On `obsidiana`, only `maiz` and `niebla` pass for normal text. On `pino`, use `niebla`.
- Approximate surface proportion: niebla 45%, obsidiana 20%, pino 18%, lago 8%, barro 5%, maiz 4%. `barro` is an accent, never a large background.
- Do not add tints, shades or new colors without a human request. If one is requested, declare it next to the others in `src/App.css` and report its contrast ratios.

## Cultural care

Tzij works with Mayan peoples' languages and cosmovision, so cultural references are handled with care, not avoided by default.

- Cultural elements are allowed, but **never include one without the owner's explicit confirmation of the design**. This covers anything that refers directly to Mayan cosmovision or symbols: the Kajbal (Mayan cross) and the four directions, glyphs and calendar day signs, textile or güipil motifs, ceremonial color groupings, and flags or emblems of Indigenous peoples.
- When a request involves one of them: propose the design, say exactly what it references and how, and wait for confirmation before it is implemented in code or marked as final.
- Prefer a structural or abstract reference over a literal reproduction. Do not copy an existing emblem, flag or glyph as is.
- Do not use stereotyped imagery of Indigenous people or decorative "Mayan-style" ornament.
- Do not claim cultural accuracy. Flag that references should be reviewed by Mayan speakers or community advisors, and record the open review in `TZIJ_STATUS.md`.

## Practical constraints

- Assume users on low-end Android phones and slow or intermittent connections: keep pages light and make sure UI degrades gracefully with system fonts.
- Interfaces are multilingual (Spanish, English, and in the future Kʼicheʼ and Qʼeqchiʼ). Avoid fixed-width buttons or labels; Mayan words are often longer than their Spanish equivalents.
- Every new page needs Spanish and English copy, a `PAGES` entry in `src/lib/routes.ts` and a `seo.<key>` block in both locale files.

## Checklist before committing

- [ ] No hardcoded hex values or font names outside the variable declarations in `src/App.css`.
- [ ] Tzij colors only inside `.tzij-theme`; outside `/tzij`, Connecta elements keep Connecta colors.
- [ ] All Mayan text follows the glottal stop rule above.
- [ ] Contrast checked for any new color pairing.
- [ ] Any cultural reference was confirmed by the owner (see Cultural care).
- [ ] `TZIJ_STATUS.md` updated if scope or progress changed.
- [ ] `npm run build` and `npm run lint` pass.

# Design reference

Tzij design canvas (page `/tzij` and the home products card): https://claude.ai/artifact/HFzGmQtjKydDjyisrcFSSG

Connecta site canvases, for the shared style (typography, spacing, component styling):

- Home redesign: https://claude.ai/code/artifact/58bc0005-de29-4405-863d-fbb7fe13f72b
- Medassistant page and WhatsApp section: https://claude.ai/artifact/Azb4oyMnFsriGe3qdBbHiJ

Match them when implementing new UI. Each canvas has named artboards (Main, Home-Card, Products-B-Feature, WhoWeAre-C-Editorial, etc.); name the relevant one when asking for a specific section to be implemented.
