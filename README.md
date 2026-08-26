# Reusable Obsidian vault configuration

This vault is the **reusable configuration** of a personal Obsidian vault used for organizing life and taking notes. It is the workflows, templates, and folder conventions — not the private notes those workflows produced.

Copy or clone it, then follow each folder’s README. Plugin and theme setup is in [[dev/docs/common-issues|common issues]]. Do not commit `.obsidian/todoist-token` or your own journal, school, or work notes if you publish a fork.

Feel free to modify the workflows to fit your needs :).

## Why this vault exists

The **core habit** is opening the daily note. Do that consistently and you always have a place to plan today, reflect on what yesterday could have been better, and set or adjust goals. I do this via a journalling habit and connecting the reward system to my Todolist, change this as desired.

The **secondary workflow** is misc notes: a fast way to capture tldr-first reference notes. Using Claude or any other LLM service, you can use it to make quick notes that promote active recall.

Everything else is optional organization. Keep `dev/` and `π-imgs/` where they are (`dev/` holds Templater scripts; `π-imgs/` is the attachment folder). Any other folder — daily notes, misc notes, goals, archive, placeholders — you can move or rename to fit how you take notes. If you move a workflow folder, update that folder’s plugin settings (Daily Notes path, template path, and so on).

## Quick start

Open this folder as an Obsidian vault. Press **Cmd-Shift-D** (macOS) to open today’s daily note. That is the core habit: one shortcut, every day, so you always have a place to plan, look back, and log goals.

How that note works: [[!daily-notes/README|daily notes README]].

**Strongly recommended:** set up Todoist so today’s and overdue tasks show in the daily note. Follow [[dev/docs/todoist-setup|Todoist setup]].

Other shortcuts: [[dev/docs/hotkeys|hotkeys]]. Theme, plugins, or path problems: [[dev/docs/common-issues|common issues]].

## Folder map

Prefixes (`!` / `~` / `π`) sort the explorer by how often you open the folder. That sort is the point. Naming and prefixes: [[dev/style-guide/README|style guide]].

**Do not move** `dev/` (Templater scripts) or `π-imgs/` (attachments).

**Workflows** — keep these; rename only if you update the matching plugin paths:

| Folder | What it is |
|---|---|
| `!daily-notes/` | Daily journal + goal scoreboard |
| `!misc-notes/` | Tldr-first reference notes |
| `~goals/` | One file per daily-note goal property |
| `π-archive/` | Cooled-off workflows (active recall) |

**Examples only** — replace or delete: `~personal/`, `~school/`, `~work/`.

Start with [[!daily-notes/README|daily notes]], then [[!misc-notes/README|misc notes]].

## What is included vs excluded

**Included:** templates, scripts, plugin *settings* (not plugin binaries), READMEs, one fictional daily note, one fictional misc note, empty `~` placeholders.

**Excluded:** real journals, study notes, recipes, tokens, workspace layout, plugin `main.js` files. Install plugins and the theme from Obsidian’s browsers.

If you use this workflow and it helps, please star the repo.
