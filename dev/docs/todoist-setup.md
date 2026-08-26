# Todoist setup

The daily note is the journal and goal scoreboard. Todoist stays the task list. The note does not replace Todoist — it makes you look at it.

**Set this up.** The daily template already has a task block. Without the plugin, that block is blank. Scoring (`todo_done` 0/1/2) still works, but you lose the reason the block is there: seeing today and overdue in the same place as the journal.

## Install

1. Settings → Community plugins → browse **Todoist Plugin** (Jamie Brynes) → Install and Enable.
2. In Todoist: Settings → Integrations → copy the API token.
3. Paste the token in the plugin settings. Do not commit `.obsidian/todoist-token`.

## What the daily note already includes

The template’s **Tasks (Today & Overdue)** block uses:

```todoist
name: "Tasks (Today & Overdue)"
filter: "(today | overdue) & (!shared)"
```

Complete tasks in Todoist (sync is one-way into Obsidian). Command palette → **Todoist: Refresh** if the list looks stale. Any Todoist filter works if you want to change it (`today & #Work`, `p1`, and so on).

## Scoring

`todo_done` is a coarse score, not a second task app:

| Value | Meaning |
|---|---|
| `0` | Did not work the list / none done |
| `1` | Partial (about half the day’s tasks) |
| `2` | Finished the day’s list |

How that feeds streaks and rewards: [[!daily-notes/README|daily notes]].

How to use Todoist day to day: [[dev/docs/todoist|Todoist]].
