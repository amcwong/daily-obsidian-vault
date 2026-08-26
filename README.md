# Reusable Obsidian vault configuration

This vault is the **reusable configuration** of a personal Obsidian vault used for organizing life and taking notes. It is the workflows, templates, and folder conventions — not the private notes those workflows produced.

Copy or clone it, install the plugins below, and follow each folder’s README. Do not commit `.obsidian/todoist-token` or your own journal, school, or work notes if you publish a fork.

Feel free to modify the workflows to fit your needs :).

## Why this vault exists

The **core habit** is opening the daily note. Do that consistently and you always have a place to plan today, reflect on what yesterday could have been better, and set or adjust goals. I do this via a journalling habit and connecting the reward system to my Todolist, change this as desired.

The **secondary workflow** is misc notes: a fast way to capture tldr-first reference notes. Using Claude or any other LLM service, you can use it to make quick notes that promote active recall.

Everything else is optional organization. Keep `dev/` and `π-imgs/` where they are (`dev/` holds Templater scripts; `π-imgs/` is the attachment folder). Any other folder — daily notes, misc notes, goals, archive, placeholders, `style-guide/` — you can move or rename to fit how you take notes. If you move a workflow folder, update that folder’s plugin settings (Daily Notes path, template path, and so on).

## Quick start

1. Open this folder as an Obsidian vault.
2. Settings → Appearance → install and use the **Minimal** theme (the vault is already set to expect it).
3. Settings → Community plugins → turn off Safe mode if needed → Obsidian should offer to install the plugins listed in `.obsidian/community-plugins.json`:
   - Templater
   - Dataview (enable JavaScript queries if the prompt appears)
   - Calendar
   - Folder Notes
4. Confirm Templater: **Trigger on new file creation** is on, and User Script Files is `dev/plugin-folders/templater/scripts`.
5. Confirm Daily notes: folder `!daily-notes/notes`, template `!daily-notes/templates/Daily Notes Template.md`, format `YYYY/MM-MMMM/YYYY-MM-DD`.
6. Cmd-Shift-D (macOS) opens today’s daily note. A fictional example already lives at `!daily-notes/notes/2026/01-January/2026-01-15.md`.

Todoist is **not** installed. Add it only if you want today’s tasks rendered inside the daily note. Scoring (`todo_done` 0/1/2) does not need the plugin. See `!daily-notes/README.md`.

## Folder map

Look at the file explorer. That sort order is the point of the prefix system. Only `dev/` and `π-imgs/` need to stay put; the rest of this table is a starting layout, not a required one. 

| Folder | Prefix | What it is |
|---|---|---|
| `!daily-notes/` | high use | Daily journal + goal scoreboard |
| `!misc-notes/` | high use | Tldr-first reference notes from an LLM project |
| `dev/` | none (tooling) | Templater scripts and plugin-related notes |
| `style-guide/` | none (tooling) | Vault-wide conventions |
| `~goals/` | medium | Placeholder life area |
| `~personal/` | medium | Placeholder life area |
| `~school/` | medium | Placeholder life area |
| `~work/` | medium | Placeholder life area |
| `π-archive/` | low use | Cooled-off workflows (active recall lives here) |
| `π-imgs/` | low use | Attachments |

Start with [[style-guide/README|style-guide]], then [[!daily-notes/README|daily notes]] and [[!misc-notes/README|misc notes]].

## What is included vs excluded

**Included:** templates, scripts, plugin *settings* (not plugin binaries), READMEs, one fictional daily note, one fictional misc note, empty `~` placeholders.

**Excluded:** real journals, study notes, recipes, tokens, workspace layout, plugin `main.js` files. Install plugins and the theme from Obsidian’s browsers.

## Hotkeys shipped in this vault

See [[style-guide/hotkeys]]. Summary:

| Shortcut (macOS) | Action |
|---|---|
| Cmd-Shift-D | Today’s daily note |
| Cmd-Shift-Y | Previous daily note |
| Cmd-Shift-; | Next Templater cursor |
| Cmd-Shift-A / S | Toggle left / right sidebar |
| Cmd-Alt-1…6 | Set heading level |
| Cmd-Shift-P (optional) | Push backup to GitHub if you install Obsidian Git |

## Folder Notes

Left-click a folder to open its `README.md`. New notes go in the **same folder as the current file** (Settings → Files and links). Details: `dev/obsidian-config/folder-notes-and-nesting.md`.
