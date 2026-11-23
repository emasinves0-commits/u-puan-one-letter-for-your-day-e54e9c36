# AGENT.md — One Letter for Your Day

## What the entry is

A tiny program that writes exactly one letter — **Z** — to `entry.txt` and
nothing else. Behind Z sits the word for the day: **zombie**, a sleep-dead
day (zero sleep, zonked, Zzz).

## Why Z

Zombie, zero sleep, zonked, and Zzz all converge on one vivid sleep-dead
picture — and the letter Z is itself the sleep symbol. Monday was the
runner-up, but zombie wins on vividness and funniness, the criteria that
decide this bounty.

## How main.ts works

`main.ts` reads `MAKEFUN_OUTPUT_DIR` (default `/output`), creates it
recursively with `mkdirSync`, then writes exactly the single character `Z`
with no trailing newline to `entry.txt` inside it via `writeFileSync`.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```
