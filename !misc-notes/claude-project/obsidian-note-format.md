---
title: "Obsidian Note Format"
tags: [meta, formatting, reference]
---

# Obsidian Note Format

This file documents the general formatting and tagging conventions used for notes in this vault, independent of any particular workflow (e.g. active recall). It's meant to be portable — reusable as a system prompt or reference in other Claude projects that write into an Obsidian vault, even ones without an active recall setup.

## YAML frontmatter

Every note starts with a frontmatter block:

```yaml
---
title: "Note Title"
tags: [subject, subtopic, note-type]
related: ["[[some-other-note]]", "[[another-note]]"]
---
```

- `title` — human-readable title, matches or closely mirrors the H1 heading and filename.
- `tags` — lowercase, kebab-case where multi-word; typically includes a subject-area tag plus a note-type tag (e.g. `linalg`, `derivation`, `reference`).
- `related` — optional list of `[[wikilink]]`-style references to other notes in the vault that this note builds on or connects to.

## Filenames

- **kebab-case**, prefixed with a subject-domain tag, e.g. `linalg-matrix-invertibility.md`, `calc-partial-derivatives.md`.
- Filenames should be descriptive enough to identify the note's content without opening it.
- Avoid spaces, capital letters, or special characters.

## Cross-referencing

- Use `[[wikilink]]` syntax to link to other notes by filename (without the `.md` extension).
- Prefer linking on first meaningful mention of a concept covered elsewhere, rather than every occurrence.

## Callout blocks

Obsidian-style callouts are used for asides, warnings, definitions, and collapsible content:

```markdown
> [!note] Title
> Body text.

> [!warning] Title
> Body text.

> [!question]- Title
> Collapsed by default (the trailing `-` makes it collapsible/closed).
```

Common callout types used in this vault: `note`, `warning`, `question`, `example`, `tip`.

## Property tables

Simple key–value or comparison data is presented as a markdown table rather than prose, e.g.:

```markdown
| Property | Value |
|---|---|
| Domain | ... |
| Range | ... |
```

## Math formatting

- All LaTeX uses block delimiters `$$ ... $$`, even for short expressions, so Obsidian's renderer picks it up consistently.
- Inline math within a sentence can use `$ ... $` where a full block would break the sentence flow.
- Matrices use `\begin{bmatrix} ... \end{bmatrix}`.
- Every variable introduced in an equation is defined in surrounding text the first time it appears.

## Folder organization

Notes are grouped into subject-area folders (e.g. a folder for linear algebra, a folder for calculus review, etc.), rather than kept flat in a single directory. New notes should be placed in the folder matching their primary subject tag.

## Delivery

- Notes are created as raw `.md` files via file-creation tools and delivered for direct import, not pasted as chat text — this preserves LaTeX, tables, and callout syntax that would otherwise break when copy-pasted.
