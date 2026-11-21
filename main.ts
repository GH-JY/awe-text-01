import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "By lamplight a woman sorts buttons into a tin. Bone first, then black, then four that match nothing. The tin's hinge has worn soft. The lid stays open. The old dog sleeps against her foot. Past the glass the river goes down the valley it cut before there was a mill to turn.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
