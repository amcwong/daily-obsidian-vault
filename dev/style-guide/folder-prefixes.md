---
title: Folder prefixes
tags: [meta, style-guide]
---

# Folder prefixes (`!` / `~` / `π`)

Obsidian’s file explorer sorts alphabetically. These prefixes force that sort to match **how often you open the folder**, not the topic name.

The prefix is a recency/use signal, not a permanent taxonomy. Retag a folder when it heats up or cools off.

## Sort table

| Prefix | Role | Sort position | In this vault |
|---|---|---|---|
| `!` | High-frequency working surfaces | Top (ASCII 33, before letters) | `!daily-notes`, `!misc-notes` |
| *(none)* | Tooling / infrastructure | Middle, with Latin letters | `dev` |
| `~` | Medium-frequency life areas | After Latin letters (ASCII 126) | `~goals`, `~personal`, `~school`, `~work` |
| `π` | Low-frequency / archive / attachments | Bottom (Greek letter) | `π-archive`, `π-imgs` |

Look at the file explorer: that order is the demo. The `~` folders are empty placeholders for your own life areas. Rename or re-prefix them.

## Nested prefixes

The same marks work inside a folder. A hot subfolder gets `!…`; a cooled-off one gets `π-…`. Example pattern: `~goals/!reward-log` vs `~goals/π-archive`.

New folder names should use `-` or `_`, not spaces. See [[naming]].

## When to re-prefix

- You open it most days → `!`
- You open it some weeks, not most days → `~`
- You rarely open it, or it is attachments/history → `π`
- Scripts, configs, style guide → leave unprefixed (they live under `dev/`)

## What breaks on rename

A prefix change is a folder rename. Update anything that hardcoded the old path:

- Settings → Daily notes (folder + template)
- Settings → Templater (user-script folder, if it lived under a prefixed path)
- Settings → Files and links → attachment folder
- Dataview queries (`FROM "old-path"`)
- Templater scripts that build paths as string literals

`carryOverCalc.js` and the daily-note DataviewJS derive the daily-notes root from the current file path (everything before `/notes/`), so a prefix change on `!daily-notes` does **not** break those two — but Daily Notes settings still need the new path.
