---
title: Keep meals short
daily_note_property: short_meal
tags: [goal]
---

# Keep meals short

## What this goal is

Stop meals from becoming an unbounded event (long delivery waits, grazing, extra orders). Saves time and keeps you present for the rest of the evening.

## How I want to achieve it

- Time each meal. The cap is **30 minutes** from first bite to done (phone down, plate cleared).
- Default is `1`. Use a simple meal you can finish in that window.

## Failure condition

- Log `0` if any meal goes over 30 minutes, including waiting for delivery that pushes the sitting past the cap.
- Snacking that turns into a second untimed meal is `0`. A 30-minute timer that you actually stop on is `1`.

## Related

Daily note field: `short_meal` — see [[!daily-notes/README]].
