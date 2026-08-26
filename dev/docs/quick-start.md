# Quick start

Open this folder as an Obsidian vault. Press **Cmd-Shift-D** (macOS) to open today’s daily note. How that note works: [[!daily-notes/README|daily notes]].

Theme, plugins, or path problems: [[dev/docs/common-issues|common issues]]. Todoist: [[dev/docs/todoist-setup|Todoist setup]] · [[dev/docs/todoist|Todoist]].

## GitHub backup

Set this up so the vault is not only on this machine. This public vault does not ship Obsidian Git; add it yourself.

1. Put **your** copy on GitHub — fork this repo, or create a new repo and point `origin` at it. Do not push personal notes or a Todoist token to the original project.
2. On the machine, install [Git](https://git-scm.com/) if it is missing. `git status` in this folder should work in a terminal.
3. Settings → Community plugins → browse **Obsidian Git** → Install and Enable.
4. If `git push` already works in a terminal (SSH or a credential helper), the plugin can use that. Otherwise follow Obsidian Git’s GitHub authentication prompt.
5. Settings → Hotkeys → bind **Git: Push** to **Cmd-Shift-P**. If that is already the command palette, use **Cmd-Ctrl-Shift-P** instead. Other shortcuts: [[dev/docs/hotkeys|hotkeys]].

Do not commit `.obsidian/todoist-token`. The vault’s `.gitignore` already excludes it, plus workspace files.

Push after a daily-note session, or whenever you want a backup. Obsidian Git’s auto-push can stay off.
