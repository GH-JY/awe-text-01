import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "By the lamp a man is mending a coat, drawing the needle slow through the lining. The thimble is worn smooth at the rim. Past the window, snow comes down on the stubble, on the ruts, on the road, as it did before the road was there. The sleeve is turned. The needle goes in again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
