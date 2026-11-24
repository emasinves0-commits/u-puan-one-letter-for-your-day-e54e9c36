import { mkdirSync, writeFileSync } from "node:fs";

// One Letter for Your Day — the entry is a single letter, A to Z,
// standing for the word that describes the day. Z = zero sleep:
// a night with no sleep, the most vivid, funny and true day-word
// a single letter can carry.
const LETTER = "Z";
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = "entry.txt";

// The gate allows exactly one character, A to Z — nothing else.
function checkedLetter(value: string): string {
  if (!/^[A-Z]$/.test(value)) {
    throw new Error("entry must be exactly one letter, A to Z");
  }
  return value;
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(`${OUTPUT_DIR}/${OUTPUT_FILE}`, checkedLetter(LETTER));
