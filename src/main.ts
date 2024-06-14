import { WebTerminal, CommandEcho } from "../lib/main.ts";
import CommandClear from "../lib/commands/clear.ts";

const terminal = new WebTerminal({
  commands: [new CommandEcho(), new CommandClear()],
});

const app = document.querySelector("#app");
if (app === null) {
  throw Error("Failed to find #app element");
}
app.appendChild(terminal);
