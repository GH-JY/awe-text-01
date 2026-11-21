import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "The cat sleeps under the chair, its tail folded over its nose. On the step a saucer of water holds one inch of sky. The tide is going out across the flats. It will be going out a long while yet. The cat's flank rises and falls. The saucer keeps its inch of sky.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
