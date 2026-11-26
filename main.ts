// Snooze Button Roast — make.fun entry
// Writes one roast line (at most 200 characters) to /output/entry.txt.
// Deterministic, no network, no arguments. The output folder is created
// if missing but never removed, so a grader-mounted folder stays intact.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "At 6 AM on a Saturday my alarm screamed like the weekend had personally offended it — the snooze button nodded and said, 'Same, mate.'";

// Gate the house template checks up front: the entry must be 1–200
// characters of non-whitespace text, or it is never judged.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast line fails the 1-200 character gate (${ROAST.length} chars)`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
