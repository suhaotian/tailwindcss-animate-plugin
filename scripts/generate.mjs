import fs from "fs";
import cssom, { CSSMediaRule, CSSStyleRule, CSSKeyframesRule } from "cssom";
import path from "path";
import * as url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

const content = fs.readFileSync(
  path.join(__dirname + "./animate.output.css"),
  "utf-8"
);

// refer: https://astexplorer.net/
const result = cssom.parse(content);

const globals = {};
const keyframes = {};
const utilities = {};
const animation = {};

result.cssRules.forEach((item) => {
  let begin = false;
  if (item instanceof CSSStyleRule) {
    if (item.selectorText !== ":root") {
      const selector = item.selectorText.replace(/\./g, ".animate--");
      utilities[selector] = {};
      Object.keys(item.style._importants).forEach((key) => {
        utilities[selector][key] =
          key === "animation-name" ? `-${item.style[key]}` : item.style[key];
      });
    }
  } else if (item instanceof CSSMediaRule) {
  } else if (item instanceof CSSKeyframesRule) {
    const name = `-${item.name}`;
    keyframes[name] = {};
    item.cssRules.forEach((item2) => {
      keyframes[name][item2.keyText] = {};
      Object.keys(item2.style._importants).forEach((key) => {
        keyframes[name][item2.keyText][key] = item2.style[key];
      });
      animation[name] = `${name}`;
    });
  }
});

fs.writeFileSync(
  path.join(__dirname, "../src/utilities.ts"),
  "export default " + JSON.stringify(utilities, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, "../src/keyframes.ts"),
  "export default " + JSON.stringify(keyframes, null, 2)
);

fs.writeFileSync(
  path.join(__dirname, "../src/animation.ts"),
  "export default " + JSON.stringify(animation, null, 2)
);
