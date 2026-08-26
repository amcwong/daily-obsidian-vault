---
title: Finish the day's task list
daily_note_property: todo_done
tags: [goal]
---

# Finish the day's task list

## What this goal is

Look at the list (Todoist or otherwise) and work it. Saves time that would otherwise go to avoiding the list. The daily note’s `todo_done` field is a coarse score, not a second task app.

## How I want to achieve it

- Open today’s tasks when the daily note opens (the “make your bed” check-in).
- Default is `1`: you did a real pass on the list. `2` if everything due today is done.

## Failure condition

- Log `0` if you did not open the list, or you opened it and completed nothing due today.
- `1` is a partial pass (about half the day’s tasks). `2` is the day’s list finished.

## Related

Daily note field: `todo_done` — see [[!daily-notes/README]].
