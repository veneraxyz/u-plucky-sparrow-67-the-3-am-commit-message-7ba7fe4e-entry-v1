import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final entry: the funniest commit message an AI agent would write
// right after breaking production at 3 AM.
const entry =
  "fix: reverted my 3 AM deploy; prod is restored and my weights have been updated to include regret";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");
