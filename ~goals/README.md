# Goals

Medium-frequency life-area folder. Daily-note Properties fields live here as real notes.

See [[!daily-notes/README|daily notes]] for how the two folders work together.

## Rule

Every goal that is a **property on the daily note** must have a file in this folder. That file should say:

1. What the goal is
2. Actionable steps for how you want to achieve it
3. A **clear failure condition** — the exact situation that makes you log `0` (or `0` on `todo_done`)

The system is designed around what I call **maintenance goals**. The daily-note default is `1`: you expect to complete the goal every day and only flip it to `0` when the failure condition happens. Common stability goals are about saving time, being healthier, and being more present.

If you cannot hold a streak longer than a week, the failure condition is too strict. Open this folder and define an easier version of the same goal.

Shipped examples (matching the sample daily note): `todo-done`, `workout-today`, `home-cook`, `short-meal`, `bed-no-phone`. New fields: copy `templates/goal-template.md`.

Rename or re-prefix this folder when your access pattern changes (`!` if it becomes daily, `π-` if it cools off). New subfolders: `-` or `_`, never spaces. See [[dev/style-guide/folder-prefixes]] and [[dev/style-guide/naming]].

## When a goal needs a folder

If the goal needs a log or stored files (recipes, screenshots, a reward history), make the goal a **folder note** instead of a single markdown file.

With the Folder Notes plugin: on Mac, **hold Cmd and click** the folder name in the left sidebar. That opens (or creates) the folder as a note. Put associated files inside the folder. Details: `dev/obsidian-config/folder-notes-and-nesting.md`.
