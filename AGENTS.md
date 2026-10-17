# AGENTS.md — Tzij brand identity

Instructions for AI coding agents working in this repository or applying the Tzij brand in other projects. Human-facing rationale lives in `README.md`; this file is the operational rulebook. When the two disagree, `tokens.json` wins for values and this file wins for rules.

Status: **v0.1 draft**. Only typography and color are defined. Do not invent other identity elements (logo symbols, patterns, illustrations, taglines).

## Source of truth

- All colors and font stacks live in `tokens.json` (W3C Design Tokens format).
- `build/tokens.css` and `build/tokens.ts` are **generated**. Never edit them by hand.
- After changing `tokens.json`, run `npm run build` and commit the regenerated files in the same commit.
- Never hardcode hex values or font names in consuming code. Use `var(--tzij-…)` in CSS or `tzij.…` from `build/tokens.ts`.

## Typography

| Role | Token | Font |
|---|---|---|
| Display (wordmark, headings) | `--tzij-font-display` | Fraunces |
| Text & UI | `--tzij-font-text` | Noto Sans |
| Literacy materials (optional) | `--tzij-font-literacy` | Andika |

Rules:

- Load fonts via `fonts.css` (self-hosted WOFF2). Do not add Google Fonts `<link>` tags or other CDNs.
- Do not introduce new fonts unless a human asks. Any new font must be SIL OFL (or equivalently permissive), include U+02BC, and render it with normal letter spacing. Verify the glyph before proposing it:
  ```bash
  python3 -c "from fontTools.ttLib import TTFont;import sys;print(0x2BC in TTFont(sys.argv[1]).getBestCmap())" FONT.ttf
  ```
- Known **rejected** fonts, never use: DM Sans, Manrope, Plus Jakarta Sans, Sora, Figtree, Atkinson Hyperlegible (no U+02BC); Work Sans, IBM Plex Sans (U+02BC badly spaced).
- Keep each font's `OFL.txt` beside its files. If a font is modified (subset, renamed glyphs), it must be renamed per the OFL Reserved Font Name clause.

## Glottal stop: always `ʼ` (U+02BC)

- Write Mayan-language text with the modifier letter apostrophe `ʼ` (U+02BC): `Kʼicheʼ`, `Qʼeqchiʼ`, `chʼabʼal`, `tzʼibʼ`.
- Never write `K'iche'` (U+0027) or `K’iche’` (U+2019) in UI strings, docs, filenames for display, or data you generate.
- When processing external text, normalize apostrophe-like characters that follow a letter (`'` U+0027, `’` U+2019, `‘` U+2018, `´` U+00B4, `` ` `` U+0060) to U+02BC:
  ```ts
  export const normalizeGlottal = (s: string) =>
    s.replace(/(?<=\p{L})['\u2019\u2018\u00B4`]/gu, "\u02BC");
  ```
  ```python
  import re
  APOS = re.compile(r"(?<=[^\W\d_])['\u2019\u2018\u00B4`]")
  normalize_glottal = lambda s: APOS.sub("\u02BC", s)
  ```
- Known edge case: a closing quote right after a word (`'hola'`) is also converted. Flag mixed Spanish/Mayan text for review instead of silently normalizing it in training corpora.
- Do not "fix" U+02BC back to a regular apostrophe, even if a linter, spellchecker or formatter suggests it.
- Do not invent or translate Kʼicheʼ or Qʼeqchiʼ text. Use only words provided by humans or existing approved content, and mark any placeholder clearly as such.

## Color

| Token | Hex | Role |
|---|---|---|
| `pino` | `#2F5D50` | Primary |
| `lago` | `#2B5F7E` | Secondary |
| `barro` | `#A54A29` | Accent |
| `maiz` | `#E2AA33` | Highlight |
| `piedra` | `#6E695F` | Muted text |
| `obsidiana` | `#1E1C1A` | Ink / dark background |
| `niebla` | `#F6F2EA` | Paper / light background |

Rules:

- **Never use `maiz` for text on light backgrounds** (1.9:1). Use it on `obsidiana`, or for non-text highlights and icons.
- All text must meet WCAG AA (4.5:1 normal, 3:1 large). On `niebla`, every color except `maiz` passes. On `obsidiana`, only `maiz` and `niebla` pass for normal text.
- Approximate surface proportion: niebla 45%, obsidiana 20%, pino 18%, lago 8%, barro 5%, maiz 4%. `barro` is an accent, never a large background.
- Do not add tints, shades or new colors without a human request. If one is requested, add it to `tokens.json`, rebuild, and report its contrast ratios.

## Cultural boundaries (hard rules)

Do **not** generate, suggest or include:

- Textile patterns, güipil designs or motifs associated with specific communities.
- Maya glyphs, calendar day signs or other sacred and ceremonial iconography.
- Ceremonial color groupings, such as red, black, white and yellow presented together as the four directions.
- Stereotyped imagery of Indigenous people, or decorative "Mayan-style" ornament.

These may be explored only later, with consent and participation of the communities concerned (FPIC, CARE Principles). If a request requires them, stop and ask a human.

## Practical constraints

- Assume users on low-end Android phones and slow or intermittent connections: keep pages light, subset or preload fonts only where needed, and make sure UI degrades gracefully with system fonts.
- Interfaces are multilingual (Spanish, Kʼicheʼ, Qʼeqchiʼ). Avoid fixed-width buttons or labels; Mayan words are often longer than their Spanish equivalents.

## Checklist before committing

- [ ] No hardcoded hex values or font names outside `tokens.json`.
- [ ] `npm run build` run and `build/` committed if tokens changed.
- [ ] All Mayan text uses U+02BC.
- [ ] Contrast checked for any new color pairing.
- [ ] No elements from the cultural boundaries list.
- [ ] README changelog updated for any guideline change.

# Design reference

Design canvas: https://claude.ai/code/artifact/58bc0005-de29-4405-863d-fbb7fe13f72b

Match its typography, colors, spacing, and component styling when implementing
new UI. It has multiple named artboards (Main, Products-B-Feature,
WhoWeAre-C-Editorial, etc.) — name the relevant one when asking for a specific
section to be implemented.
