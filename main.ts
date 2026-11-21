import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "An oar lies across the rowboat, still wet from the last pull. All night the lake has been moving and has not gone anywhere. Far out, a light that could be a boat or a star does not come closer. The oar dries in its own time. The wood keeps a pale shape where the water was.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
