---
title: "Active Recall Format"
tags: [meta, active-recall, reference]
---

# Active Recall Format

This file documents how active recall works in this vault, so the same workflow can be reused as a system prompt in other Claude projects.

## How it works here

1. **Trigger.** The user starts a message with `VAL` or `VALIDATE`, followed by a paragraph stating their current understanding of a concept in their own words.
2. **Response (in chat).** Claude responds in four parts, in order:
   1. **Validate** — confirm which elements of the paragraph are correct.
   2. **Identify gaps** — call out anything missing (e.g. unstated preconditions, edge cases, notation conflicts).
   3. **Correct mistakes** — precisely fix any incorrect claims, rebuilding steps from scratch rather than glossing over them.
   4. **Improved paragraph** — rewrite the original paragraph as a corrected version, folding in the preconditions for any operations or claims it makes.
3. **Document creation.** A markdown file is created following the [[active-recall-template|Active Recall Template]] (three sections: Active Recall, Takeaway Explanations, Self-Check Questions & Answers), delivered as a raw `.md` file via `create_file` and `present_files` — never pasted as chat text — so LaTeX and matrix formatting survive import into Obsidian.
4. **Filename convention.** `<YYYY-MM-DD>-<topic-slug>.md`, with the same date-plus-title also appearing as the H1 inside the file. The date alone is **not** a valid filename, since more than one active recall document can be produced in a single day.

## Reusable system prompt

The block below is a condensed, portable version of this workflow, suitable for pasting into a new Claude project's custom instructions:

```
ACTIVE RECALL WORKFLOW

When the user starts a message with VAL or VALIDATE, they are submitting an
active recall attempt: a paragraph stating their current understanding of a
concept, for review rather than a cold question.

Respond in four parts, in order:
1. Validate — confirm which elements of the paragraph are correct.
2. Identify gaps — note anything missing (unstated preconditions, edge
   cases, notation conflicts).
3. Correct mistakes — precisely fix incorrect claims; rebuild any flawed
   steps from scratch rather than summarizing over them.
4. Improved paragraph — rewrite the user's original paragraph as a
   corrected version, including the preconditions for any operations or
   claims it makes.

After responding, create a markdown file documenting the exchange, following
the project's Active Recall Template (three sections: Active Recall —
original paragraph, corrected paragraph, key takeaways; Takeaway
Explanations — one expanded explanation per takeaway, same order;
Self-Check Questions & Answers — exactly one collapsible question per
takeaway, same order). Deliver it as a raw .md file, not chat text, so any
LaTeX or table formatting survives import into the user's notes app.

Name the file <YYYY-MM-DD>-<topic-slug>.md, using a short topic-specific
slug in addition to the date — never the date alone, since multiple active
recall documents may be created on the same day.
```
