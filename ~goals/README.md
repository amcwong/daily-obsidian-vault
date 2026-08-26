# Goals

Medium-frequency life-area folder. Daily-note Properties fields live here as real notes.

See [[!daily-notes/README|daily notes]] for how the two folders work together.

## Rule

Every goal that is a **property on the daily note** must have a file in this folder. That file should say:

1. What the goal is
2. How you want to achieve it

The sample daily note’s fields have example files here (`todo-done`, `workout-today`, `home-cook`, `short-meal`, `bed-no-phone`, `early-sleep`, `read-today`). New fields: copy `templates/goal-template.md`.

Rename or re-prefix this folder when your access pattern changes (`!` if it becomes daily, `π-` if it cools off). New subfolders: `-` or `_`, never spaces. See [[style-guide/folder-prefixes]] and [[style-guide/naming]].

## When a goal needs a folder

If the goal needs a log or stored files (recipes, screenshots, a reward history), make the goal a **folder note** instead of a single markdown file.

With the Folder Notes plugin: on Mac, **hold Cmd and click** the folder name in the left sidebar. That opens (or creates) the folder as a note. Put associated files inside the folder. Details: `dev/obsidian-config/folder-notes-and-nesting.md`.
