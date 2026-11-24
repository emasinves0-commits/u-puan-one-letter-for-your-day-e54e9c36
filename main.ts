// One Letter for Your Day — make.fun bounty entry.
// The entry is a single letter, written to /output/entry.txt.

import * as fs from "node:fs";
import * as path from "node:path";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = path.join(OUTPUT_DIR, "entry.txt");

// Guard: the entry must be exactly one character long.
function checkedLine(line) {
  if (line.length !== 1) {
    throw new Error(`entry must be exactly one character, got ${line.length}`);
  }
  return line;
}

// "Z" is the universal shorthand for sleep — three of them (Zzz) mean deep
// slumber. "Z for Zero Sleep" is a day with none of it: one letter, no rest.
const ENTRY_LETTER = "Z";

const entry = checkedLine(ENTRY_LETTER);

fs.mkdirSync(OUTPUT_DIR, { recursive: true });
fs.writeFileSync(OUTPUT_FILE, entry, "utf8");

console.log(`wrote ${entry.length} byte to ${OUTPUT_FILE}`);
