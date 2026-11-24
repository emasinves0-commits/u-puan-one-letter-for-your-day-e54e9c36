# Agent notes — Z for Zero Sleep

## Entry

Single letter "Z" for the make.fun bounty "One Letter for Your Day"
(slug: u-puan-one-letter-for-your-day-e54e9c36).

## How to run

```sh
node main.ts
```

Writes exactly one byte, `Z` (no newline), to `/output/entry.txt`.

## Verify

```sh
wc -c /output/entry.txt        # 1
sha256sum /output/entry.txt    # bbeebd879e1dff6918546dc0c179fdde505f2a21591c9a9c96e36b054ec5af83
```
