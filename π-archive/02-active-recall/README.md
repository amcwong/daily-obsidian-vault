# Active recall

Retrieval practice for a concept you almost know. The file exists so you **produce** the answer, not so you re-read an explanation. Collapsed self-check questions are the point.

This folder is under `π-` because it is lower-access than daily notes and misc notes in the vault this configuration came from. Re-prefix (`!` or `~`) if it becomes a daily surface. See [[dev/style-guide/folder-prefixes]].

Use **misc notes** (`NOTE`) when the concept is gone and you need a tldr-first reference. Use **this** (`VAL`) when you can already write a paragraph. Both modes share one Claude Project. Misc notes land in `!misc-notes/`; these files stay here.

## Daily loop

1. Open yesterday’s active-recall file (if any). Answer section 3 (Self-Check) without peeking.
2. In the Claude Project, send `VAL` or `VALIDATE` plus a paragraph of what you learned, in your own words. Optionally prefix `LONG` or `SHORT`.
3. Read the chat: Validate → gaps → corrections → improved paragraph.
4. Download the markdown file Claude creates. Do not paste from chat.
5. Hone anything you still do not understand.
6. Put the file in `π-archive/02-active-recall/YYYY/MM-MMMM/` (create the month folder as needed).

Multiple files per day are fine (at least one is the goal). Filename: `YYYY-MM-DD-topic-slug.md`.

## Claude Project

Same project as misc notes. Custom instructions: `!misc-notes/claude-project/project-instructions.md`.

Upload / reference:

- [[active-recall-format]]
- [[active-recall-template]]
- `!misc-notes/claude-project/obsidian-note-format.md`

## File shape

Three sections, in order: original + corrected paragraph + takeaways; one explanation per takeaway; one collapsible question per takeaway. Details in [[active-recall-format]].
