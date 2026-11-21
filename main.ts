import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "The child's head settles onto the shoulder that carries her. Her breath slows against a collar. One shoe stays on the fourth step. A hand on the rail, warm from the day. Past the landing window the field is dark, and the fence is the last thing in it. She is heavier asleep.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
