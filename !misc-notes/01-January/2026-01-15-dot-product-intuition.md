---
title: "Dot product intuition"
created: 2026-01-15 09:00
tags: [misc-notes, linalg, example]
aliases: ["inner product (R^n)", "a · b"]
---

# 2026-01-15 — Dot product intuition

> [!note] Fictional example
> Sample misc note so you can see the template filled in. Not copied from a real study vault. Delete it when you start your own notes.

> [!tldr] Quick Answer
> The dot product of two vectors is one number: how much they point the same way, scaled by their lengths. If they are perpendicular, that number is 0. If they are parallel, it is just the product of the lengths (with a sign if they point opposite ways).

## Intuition

Think of shining a flashlight along vector $a$ and asking how long the shadow of $b$ is on that line. Multiply that shadow length by the length of $a$ and you have $a \cdot b$. A long shadow in the same direction is a large positive product; a shadow the other way is negative; no shadow (right angle) is zero.

## Full Explanation

For $a, b \in \mathbb{R}^n$,

$$
a \cdot b = \sum_{i=1}^{n} a_i b_i = \|a\| \|b\| \cos \theta
$$

where $\theta$ is the angle between them. The sum is the coordinate definition; the cosine form is the geometric one. They agree once you fix the standard inner product on $\mathbb{R}^n$.

$\|a\|$ is the Euclidean length of $a$. $\cos \theta$ is $1$ when the vectors point the same way, $0$ when they are orthogonal, and $-1$ when they point opposite ways. So the sign of the dot product is the sign of $\cos \theta$.

Two vectors are orthogonal exactly when $a \cdot b = 0$ (and neither is the zero vector, which is orthogonal to everything by this test).

## Worked Example

Let $a = (3, 0)$ and $b = (1, 1)$ in the plane.

$$
a \cdot b = 3\cdot 1 + 0\cdot 1 = 3
$$

$\|a\| = 3$, $\|b\| = \sqrt{2}$, so $\cos \theta = 3 / (3\sqrt{2}) = 1/\sqrt{2}$ and $\theta = 45^\circ$. The shadow of $b$ on the x-axis (the direction of $a$) has length $1$, and $3 \times 1 = 3$, which matches the coordinate sum.

## Key Takeaways
- $a \cdot b$ is a scalar: alignment times lengths, equivalently the sum of pairwise products of coordinates.
- $a \cdot b = 0$ (with $a, b \neq 0$) means the vectors are perpendicular.

## 3. Self-Check Practice Questions & Answers

> [!question]- If $u = (1, 2, 2)$ and $v = (2, -1, 0)$, what is $u \cdot v$? Are they orthogonal?
> $1\cdot 2 + 2\cdot(-1) + 2\cdot 0 = 0$. Yes: the product is 0 and neither vector is zero.

> [!question]- Why can a nonzero vector have dot product 0 with some other nonzero vector?
> Because $\cos \theta$ can be 0 while both lengths are positive — they can point at a right angle.
