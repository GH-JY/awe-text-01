import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "By the lamp a woman darns a sock, needle in, needle out. The heel lets the lamp through. The child sleeps on the bench, one arm hanging. The needle is iron from a stone that fell in the north field. A smith found it there. Past the glass, the rest of that sky keeps falling.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
