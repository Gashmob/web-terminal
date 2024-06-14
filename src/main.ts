import { WebTerminal, CommandEcho } from "../lib/main.ts";

const terminal = new WebTerminal({
  commands: [new CommandEcho()],
});

const app = document.querySelector("#app");
if (app === null) {
  throw Error("Failed to find #app element");
}
app.appendChild(terminal);
