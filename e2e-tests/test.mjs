import fs from "fs";
import path from "path";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const content = fs.readFileSync(path.join(__dirname, "output.css"), "utf-8");

if (content.indexOf(".animate--bounce") <= -1) {
  throw new Error("Test error: animate--bounce didn't include in output.css");
}
if (content.indexOf(".animate--jello") <= -1) {
  throw new Error("Test error: animate--jello didn't include in output.css");
}
if (content.indexOf(".animate--zoomOut") > -1) {
  throw new Error("Test error: animate--zoomOut shoudn't include in output.css");
}

console.log('Tests passed!')
