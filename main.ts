// Ship It Friday — a one-liner for the make.fun bounty
// u-mgwals-ship-it-friday-30bd407a
// Writes one line about deploying on a Friday afternoon to /output/entry.txt.
// The joke: the tests are green, but the only rollback plan is a prayer —
// the classic Friday 4:59pm deploy, right before the weekend.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE = "It's Friday, 4:59pm. The deploy button is right there. The tests are green, the rollback plan is a prayer, and production is about to learn my name.";

const MAX_CHARS = 159;

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
