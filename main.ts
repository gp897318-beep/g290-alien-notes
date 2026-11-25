// Alien Field Notes: one-line Earth review by an alien tourist.
// Picked from 8 candidates: alien POV on mundane Earth life (adults
// drinking another species' baby milk), single joke, verdict + sign-off
// at the end, 117 chars, no newline.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Lovely planet, but the locals drink another species' baby milk as adults and call it normal. 4/5, would abduct again.";

if (
  line.length < 1 ||
  line.length > 200 ||
  line.includes("\n") ||
  line.includes("\r") ||
  line.trim().length === 0
) {
  throw new Error("line must be 1-200 characters, single line, non-whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
