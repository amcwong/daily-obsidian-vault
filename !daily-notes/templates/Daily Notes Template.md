---
todo_done: 1
workout_today: 1
home_cook: 1
short_meal: 1
bed_no_phone: 1
reward_claimed: 0
---
<%* await tp.user.carryOverCalc(tp) %>
### 📈 Metrics & Streaks
```dataviewjs
// Carry-in totals come from .reward-cache.json (written at note creation).
// Today's YAML is added live. See !daily-notes/README.md.
const p = dv.current();
const notesMarker = "/notes/";
const pathIdx = p.file.path.indexOf(notesMarker);
const dailyNotesRoot = pathIdx !== -1 ? p.file.path.slice(0, pathIdx) : "!daily-notes";
const CACHE_PATH = `${dailyNotesRoot}/.reward-cache.json`;

async function readCache() {
    try {
        const raw = await app.vault.adapter.read(CACHE_PATH);
        return JSON.parse(raw);
    } catch (e) {
        return {};
    }
}

const cache = await readCache();
const todayEntry = cache[p.file.name] || { rewardTotal: 0, streaks: {} };

const NON_TODO_REWARD_FIELDS = ["workout_today", "home_cook", "short_meal", "bed_no_phone"];
const NUM_NON_TODO_PROPS = NON_TODO_REWARD_FIELDS.length;

function calculateThreshold(numDaysUntilCompletion, numNonTodoProps = NUM_NON_TODO_PROPS) {
    return numNonTodoProps * numDaysUntilCompletion * 2;
}

const REWARD_DAYS_UNTIL_COMPLETION = 10;
const REWARD_THRESHOLD = calculateThreshold(REWARD_DAYS_UNTIL_COMPLETION);

// todo_done is 0 / 1 / 2: 1 is half the todo point budget, 2 is the full
// budget (equal to all other goals combined).
function todoPointsFromValue(value) {
    const n = Number(value || 0);
    if (n === 1) return Math.floor(NUM_NON_TODO_PROPS / 2);
    if (n === 2) return NUM_NON_TODO_PROPS;
    return 0;
}
function dailyScore(page) {
    const habitPoints = NON_TODO_REWARD_FIELDS.reduce((s, f) => s + Number(page[f] || 0), 0);
    return habitPoints + todoPointsFromValue(page.todo_done);
}
const todayScore = dailyScore(p);

const rewardTotal = Number(todayEntry.rewardTotal ?? todayEntry.rewardATotal ?? 0) + todayScore;

function streakDisplay(fieldName) {
    const cached = Number(todayEntry.streaks?.[fieldName] || 0);
    const value = Number(p[fieldName] || 0);
    const completedToday = fieldName === "todo_done" ? (value === 1 || value === 2) : value > 0;
    return (completedToday ? cached + 1 : cached) + " days";
}

dv.table(
    ["Metric", "Value"],
    [
        ["🎁 Reward Progress", `${rewardTotal} / ${REWARD_THRESHOLD}` + (rewardTotal >= REWARD_THRESHOLD ? " 🏆 Congrats!" : "")],
        ["Todo Streak ✅", streakDisplay("todo_done")],
        ["Workout Streak 💪", streakDisplay("workout_today")],
        ["Home-Cook Streak 🍳", streakDisplay("home_cook")],
        ["Short-Meal Streak 🥪", streakDisplay("short_meal")],
        ["No-Phone-in-Bed Streak 🌙", streakDisplay("bed_no_phone")],
    ]
);
```

# Daily Journal
---
***Today***
<% tp.file.cursor(1) %>

***Yesterday***
<% tp.file.cursor(2) %>

**Reward**: *rename this prize*

## 📋 Tasks (Today & Overdue)

```todoist
name: Active Tasks
filter: "(today | overdue) & (!shared)"
```
