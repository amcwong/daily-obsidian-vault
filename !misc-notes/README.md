# Misc notes

Quick-reference notes for concepts that have gone cold. Open the file, read the tldr, and have the idea back. This is **not** active recall.

Use **active recall** (`VAL`) when you almost know it and want to produce the answer. Use **misc notes** (`NOTE`) when you need to re-learn it fast. Both modes live in the **same Claude Project**. Active recall files go to `π-archive/02-active-recall/`; misc notes stay here.

A fictional example: `!misc-notes/01-January/2026-01-15-dot-product-intuition.md`.

## Why this shape

The `[!tldr]` callout is first on purpose — the opposite of active recall, which builds up to takeaways and hides the answers. Self-check questions stay in the math template as optional collapsed practice; they are not the reason the file exists.

## Conventions

- Filename: `YYYY-MM-DD-topic-slug.md` (kebab-case slug; the date alone is not valid, because several notes can land on one day).
- Location: `!misc-notes/MM-MMMM/` (English month folder, e.g. `01-January`).
- Frontmatter: `title`, `created`, `tags` (include `misc-notes` plus course and concept tags), `aliases` for alternate names you might search later.
- Math vs language: `templates/misc-notes-template-math.md` or `templates/misc-notes-template-language.md`.

## Claude Project setup

One project handles `NOTE` and `VAL`.

1. Create a Claude Project (web app).
2. Upload from this vault:
   - `!misc-notes/templates/misc-notes-template-math.md`
   - `!misc-notes/templates/misc-notes-template-language.md` (if you use it)
   - `π-archive/02-active-recall/active-recall-template.md`
   - `!misc-notes/claude-project/obsidian-note-format.md`
   - optionally `π-archive/02-active-recall/active-recall-format.md`
3. Paste `!misc-notes/claude-project/project-instructions.md` into the project’s custom instructions.
4. In chat, start with `NOTE` (or `SHORT NOTE` / `LONG NOTE`). Default verbosity is SHORT. For language topics, say so and the language template applies.
5. Download the file Claude creates (`create_file` / `present_files` — do not paste from chat, or LaTeX and callouts break).
6. Drop it into this month’s folder under `!misc-notes/`.

`LONG` / `SHORT` change the depth of Full Explanation and Worked Example only. The tldr, takeaways, and self-check count stay put.

## Other triggers in the same project

- `VAL` / `VALIDATE` — active recall; see `π-archive/02-active-recall/README.md`
- `QUIZ` — practice questions from project memory
