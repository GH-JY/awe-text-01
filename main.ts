import { mkdirSync, writeFileSync } from "node:fs";

const text: string =
  "By the window a woman shells peas into a chipped bowl. The lamp is turned low. The kitchen has gone the color of tea. Outside, the field goes dark acre by acre, and the moon climbs the same hill it climbed when this house was still a field. She keeps shelling. The bowl fills.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
