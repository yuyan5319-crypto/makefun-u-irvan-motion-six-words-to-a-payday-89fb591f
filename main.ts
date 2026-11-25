import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Payday arrived. I tipped my creator.";

// The gate: exactly six words, at most 60 characters, not only whitespace.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6 || STORY.length === 0 || STORY.length > 60 || STORY.trim().length === 0) {
  throw new Error(`invalid story: ${words.length} words, ${STORY.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
