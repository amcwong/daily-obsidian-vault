// Templater user script. Computes carry-over reward totals and streak
// lengths from the most recent existing daily note, and stores them in a
// single JSON cache file instead of the note's own frontmatter, so nothing
// shows up in the Properties panel.
//
// Place this file in the Templater user script folder (Settings > Templater
// > User Script Files) and call it from the daily note template as:
//   await tp.user.carryOverCalc(tp);
// Its return value can be ignored; the side effect is writing today's
// entry into the cache file.
//
// Habit field names here MUST match NON_TODO_REWARD_FIELDS in
// !daily-notes/templates/Daily Notes Template.md. See !daily-notes/README.md.

const NON_TODO_FIELDS = ["workout_today", "home_cook", "short_meal", "bed_no_phone"];
const STREAK_FIELDS = ["todo_done", ...NON_TODO_FIELDS];
const NUM_NON_TODO_PROPS = NON_TODO_FIELDS.length;
const MAX_LOOKBACK_DAYS = 60;
const FALLBACK_ROOT = "!daily-notes";

function dailyNotesRootFromPath(filePath) {
    const path = filePath || "";
    const marker = "/notes/";
    const idx = path.indexOf(marker);
    if (idx !== -1) return path.slice(0, idx);
    return FALLBACK_ROOT;
}

function cachePathFromRoot(root) {
    return `${root}/.reward-cache.json`;
}

function notePathForDate(root, cursor) {
    const dateKey = cursor.format("YYYY-MM-DD");
    return `${root}/notes/${cursor.format("YYYY")}/${cursor.format("MM-MMMM")}/${dateKey}.md`;
}

async function readCache(cachePath) {
    try {
        const raw = await app.vault.adapter.read(cachePath);
        return JSON.parse(raw);
    } catch (e) {
        return {};
    }
}

async function writeCache(cache, cachePath) {
    try {
        const lastSlash = cachePath.lastIndexOf("/");
        if (lastSlash > 0) {
            const dir = cachePath.slice(0, lastSlash);
            if (!(await app.vault.adapter.exists(dir))) {
                await app.vault.adapter.mkdir(dir);
            }
        }
        await app.vault.adapter.write(cachePath, JSON.stringify(cache, null, 2));
    } catch (e) {
        console.log(`carryOverCalc: Failed to write cache at ${cachePath}`, e);
    }
}

function todoPointsFromValue(value) {
    const n = Number(value || 0);
    if (n === 1) return Math.floor(NUM_NON_TODO_PROPS / 2);
    if (n === 2) return NUM_NON_TODO_PROPS;
    return 0;
}

function dailyScoreFromFrontmatter(fm) {
    const habitPoints = NON_TODO_FIELDS.reduce((s, f) => s + Number(fm[f] || 0), 0);
    return habitPoints + todoPointsFromValue(fm.todo_done);
}

async function findMostRecentNote(startDate, tp, root) {
    let cursor = startDate.clone();
    for (let i = 0; i < MAX_LOOKBACK_DAYS; i++) {
        const path = notePathForDate(root, cursor);
        const file = app.vault.getAbstractFileByPath(path);
        if (file) {
            let fm = app.metadataCache.getFileCache(file)?.frontmatter;

            if (!fm) {
                try {
                    const content = await app.vault.read(file);
                    const parsed = tp.obsidian.parseYaml(content.split("---")[1]);
                    if (parsed) fm = parsed;
                } catch (e) {
                    console.log(`carryOverCalc: Failed to read file directly at ${path}`, e);
                }
            }

            if (fm) return { fm, dateKey: cursor.format("YYYY-MM-DD"), daysAgo: i + 1 };
        }
        cursor.subtract(1, "day");
    }
    return null;
}

async function carryOverCalc(tp) {
    moment.locale("en");

    const filePath = typeof tp.file.path === "function" ? tp.file.path(true) : String(tp.file.path || "");
    const root = dailyNotesRootFromPath(filePath);
    const cachePath = cachePathFromRoot(root);

    const fallback = {
        rewardATotal: 0,
        rewardBTotal: 0,
        streaks: Object.fromEntries(STREAK_FIELDS.map(f => [f, 0])),
    };

    const cache = await readCache(cachePath);
    const todayKey = tp.file.title;
    const todayMoment = moment(todayKey, "YYYY-MM-DD");
    const yesterday = todayMoment.isValid() ? todayMoment.clone().subtract(1, "day") : moment().subtract(1, "day");
    const found = await findMostRecentNote(yesterday, tp, root);

    let result = fallback;

    if (found) {
        const { fm, dateKey, daysAgo } = found;
        const gapDays = daysAgo - 1;
        const lastScore = dailyScoreFromFrontmatter(fm);
        const priorEntry = cache[dateKey] || fallback;

        const rewardATotal = Number(fm.reward_a_claimed || 0) > 0
            ? 0
            : priorEntry.rewardATotal + lastScore;
        const rewardBTotal = Number(fm.reward_b_claimed || 0) > 0
            ? 0
            : priorEntry.rewardBTotal + lastScore;

        const streaks = {};
        for (const f of STREAK_FIELDS) {
            const value = Number(fm[f] || 0);
            const wasCompleted = f === "todo_done" ? (value === 1 || value === 2) : value > 0;
            const cached = Number(priorEntry.streaks?.[f] || 0);
            streaks[f] = wasCompleted ? cached + 1 + gapDays : 0;
        }

        result = { rewardATotal, rewardBTotal, streaks };
    }

    if (!/^\d{4}-\d{2}-\d{2}$/.test(todayKey)) {
        console.log(`carryOverCalc: Skipping cache write for non-date file "${todayKey}"`);
        return result;
    }

    cache[todayKey] = result;
    await writeCache(cache, cachePath);

    return result;
}

module.exports = carryOverCalc;
