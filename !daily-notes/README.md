# Daily notes

One note per day: a short, forced check-in with your task list and your current goals, plus a journal and goal scoreboard. A task list (Todoist or anything else) stays the task system of record. This note does not replace that list — it makes you look at it.

**I highly recommend setting up Todoist.** Follow [[dev/docs/todoist-setup|Todoist setup]]. Day-to-day use: [[dev/docs/todoist|Todoist]].

A fictional example: `!daily-notes/notes/2026/01-January/2026-01-15.md`.

How daily notes and goals fit together: [[~goals/README|~goals/README.md]].

## Why this shape

Opening the daily note is the “make your bed” habit: a small, reliable action that forces you to face the day. That means looking at today’s tasks and at the goals you are already maintaining, not waiting until you feel like planning.

A second purpose is yesterday. The **Yesterday** prompt is there so you notice what to improve and turn that into something concrete to work on — a goal to keep, adjust, or start. Defining goals, then maintaining and working on them, is a large part of what the note is for. The journal captures that reflection; the Properties fields are how those goals get logged day after day.

- YAML goal fields keep the Properties panel as the daily checklist.
- The template embeds today’s and overdue Todoist tasks. Setup: [[dev/docs/todoist-setup|Todoist setup]]. Usage: [[dev/docs/todoist|Todoist]]. Without the plugin the block is inert; `todo_done` still scores the day as `0` / `1` / `2`.
- Carry-over math lives in `!daily-notes/.reward-cache.json`, not in frontmatter, so Properties stays editable fields only.
- One reward track. Rename the prize in the template.

Goal fields in this public vault are generic examples (`todo_done`, `workout_today`, `home_cook`, `short_meal`, `bed_no_phone`). Change them to match your life (see Customizing goals). Each one needs a file in [[~goals/README|~goals]] with a clear failure condition.

## What belongs on the daily note

The Properties fields are **personal goals that promote life stability and consistency** — the ones you are trying to make automatic because a current pattern is costing you. Each field should have a matching note in the [[~goals/README|goals folder]] that says what the goal is and how you will achieve it.

They are not a catch-all checklist. Shaving, taking medication, or “study one hour” would not qualify: those are tasks or one-off discipline, not stability goals you are rebuilding. Cooking at home (`home_cook`) qualifies if the problem is eating out; no phone in bed (`bed_no_phone`) qualifies if the problem is doom-scrolling. Pick fields the same way: a real pattern you are replacing, with a goal file behind it and a failure condition you can actually keep for more than a week.

## Plugins and settings

Required:

- **Daily notes** (core) — folder `!daily-notes/notes`, template `!daily-notes/templates/Daily Notes Template.md`, format `YYYY/MM-MMMM/YYYY-MM-DD`
- **Templater** — `Trigger Templater on new file creation` on; user scripts folder `dev/plugin-folders/templater/scripts`; jump to cursor on
- **Dataview** — Enable JavaScript queries
- **Calendar** — uses the same Daily Notes settings

Hotkeys: see [[dev/docs/hotkeys]] (Cmd-Shift-D / Y / ; / A).

## Daily loop

1. Cmd-Shift-D (or the calendar) creates today’s file. Templater runs `carryOverCalc.js` once and writes today’s cache entry.
2. Look at today’s tasks and at your current goals (the “make your bed” check-in).
3. Write **Yesterday**: what to improve, and any goal that follows from that. Then write **Today**.
4. Log goals in Properties. Binary goals default to `1` (maintenance — you expect to complete them). Flip to `0` only when the failure condition in that goal’s file happens. `todo_done` is:
   - `0` — did not work the list / none done
   - `1` — partial (about half the day’s tasks)
   - `2` — finished the day’s list
5. When the reward hits its threshold, log a positive number in `reward_claimed`. The **next** note’s carry-in resets to 0. Today’s displayed total does not zero until then.

## Scoring (short)

- Four binary goals: 1 point each if `> 0`. (`workout_today`, `home_cook`, `short_meal`, `bed_no_phone`)
- `todo_done` of `1` is half that budget (2 points); `2` is the full budget (4 points). Max day = 8.
- Threshold = `4 × days-until-completion × 2`. Default in the template: 10 days (80). Edit that constant in the template.
- Streaks: a binary goal continues if `> 0`; `todo_done` continues on `1` or `2`. Missed *notes* are treated as continuing a streak; a logged miss breaks it.

The Metrics table is live for **today**. Everything before today is baked into the cache at creation. Editing an old note does not recompute downstream entries — fix a stale chain by hand in `.reward-cache.json`.

Do not put the Templater `<%* … %>` call inside YAML. It must sit below the closing `---`.

## Customizing goals

The goal field list is duplicated. Edit **both**:

1. `!daily-notes/templates/Daily Notes Template.md` — YAML defaults, `NON_TODO_REWARD_FIELDS`, and the Metrics table rows
2. `dev/plugin-folders/templater/scripts/carryOverCalc.js` — `NON_TODO_FIELDS`

If they drift, scores and streaks disagree.

## Prefix-rename caution

If you rename `!daily-notes`, update Daily Notes settings. The template and `carryOverCalc.js` derive the folder root from the current path (everything before `/notes/`). See [[dev/style-guide/folder-prefixes]].
