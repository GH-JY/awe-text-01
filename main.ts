import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "Under the field the sea is still lying down. Four hundred million years, and the shells are here, white as a fingernail in the clay. A cow bends to the grass above them. The wind crosses. The grass comes back up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
