import { WebTerminal } from "../lib/main.ts";

const terminal = new WebTerminal({
  commands: [],
});

const app = document.querySelector("#app");
if (app === null) {
  throw Error("Failed to find #app element");
}
app.appendChild(terminal);
