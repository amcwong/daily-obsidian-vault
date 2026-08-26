---
title: Folder and file naming
tags: [meta, style-guide]
---

# Folder and file naming

## Folders

Use `-` or `_` instead of spaces.

| Good | Avoid |
|---|---|
| `!daily-notes` | `Daily Notes` |
| `~deep-work` | `~Deep Work` |
| `π-archive` | `π archive` |

The only extra characters at the **start** of a folder name are the sort prefixes `!`, `~`, and `π` (see [[folder-prefixes]]). Do not put spaces after the prefix.

Why: spaces break or complicate wikilinks, Dataview `FROM` queries, Templater path strings, and URLs (`%20`).

## Notes

- Daily notes: `YYYY-MM-DD.md` (the Daily Notes plugin owns this).
- Misc notes and active recall: `YYYY-MM-DD-topic-slug.md` (kebab-case slug, not the date alone).
- Other notes: kebab-case, descriptive enough to identify without opening.

Avoid spaces, capital letters, and special characters in slugs.
