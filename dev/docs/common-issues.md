# Common issues

Setup and path problems. The root README’s quick start is: open the vault, press Cmd-Shift-D, then read [[!daily-notes/README|daily notes]].

## Theme and plugins

1. Open this folder as an Obsidian vault.
2. Settings → Appearance → install and use the **Minimal** theme (the vault is already set to expect it).
3. Settings → Community plugins → turn off Safe mode if needed → Obsidian should offer to install the plugins listed in `.obsidian/community-plugins.json`:
   - Templater
   - Dataview (enable JavaScript queries if the prompt appears)
   - Calendar
   - Folder Notes

## Daily notes and Templater paths

4. Confirm Templater: **Trigger on new file creation** is on, and User Script Files is `dev/plugin-folders/templater/scripts`.
5. Confirm Daily notes: folder `!daily-notes/notes`, template `!daily-notes/templates/Daily Notes Template.md`, format `YYYY/MM-MMMM/YYYY-MM-DD`.
6. Cmd-Shift-D should open today’s daily note. A fictional example lives at `!daily-notes/notes/2026/01-January/2026-01-15.md`.

If Cmd-Shift-D does nothing, check [[dev/docs/hotkeys|hotkeys]] and Settings → Hotkeys for **Daily notes: Open today's daily note**.

## Todoist

**Set this up.** Follow [[dev/docs/todoist-setup|Todoist setup]]. Scoring (`todo_done` 0/1/2) works without the plugin; the live task list does not.

## Folder Notes

Left-click a folder to open its `README.md`. New notes go in the **same folder as the current file** (Settings → Files and links). Details: `dev/obsidian-config/folder-notes-and-nesting.md`.
