# Folder Notes and nested new pages

Goal: mimic Notion, where a new page created from a parent stays in that parent’s folder instead of landing in the vault root.

## How to use it

1. Left-click a folder in the file explorer to open its folder note (the README).
2. Type `[[` and the new page name.
3. Cmd-click (macOS) the link to open the new note — it is created in the **same folder as the current file**.

## Settings this vault already uses

- Community plugin **Folder Notes**: left-click opens that folder’s `README.md`; use the arrow to expand/collapse. Folder notes are left visible in this public vault so the READMEs are easy to find.
- Settings → Files and links → **Default location for new notes** = Same folder as current file (`newFileLocation: current` in `app.json`).
