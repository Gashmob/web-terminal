import type {
  Command,
  CommandOutput,
  TerminalConfiguration,
} from "./configuration";
import Output from "./CommandOutput.ts";
import CommandEcho from "./commands/echo.ts";
import CommandClear from "./commands/clear.ts";

class WebTerminal extends HTMLDivElement {
  private readonly history: HTMLDivElement;
  private readonly output: CommandOutput;
  private readonly config: TerminalConfiguration;

  public constructor(
    config: TerminalConfiguration = {
      commands: [],
    },
  ) {
    super();

    this.config = config;
    this.history = document.createElement("div");
    this.output = new Output(this.history);
  }

  public connectedCallback(): void {
    this.buildTerminal();
  }

  /**
   * *--------------------------*
   * | *----------------------* |
   * | |                      | |
   * | |                      | |
   * | | Text 1               | |
   * | | Text 2               | |
   * | | Text 3               | |
   * | *----------------------* |
   * | > input                  |
   * *--------------------------*
   */
  private buildTerminal(): void {
    this.style.width = "100%";
    this.style.minWidth = "500px";
    this.style.height = "100%";
    this.style.minHeight = "300px";

    const shadow = this.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
    * {
      margin: 0;
      padding: 0;
      background-color: black;
      color: white;
      font-family: monospace;
      font-size: 12px;
    }
    
    .container {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column-reverse;
      justify-items: stretch;
      align-items: stretch;
      overflow-y: scroll;
    }
    
    .input {
      border: none;
      outline: none;
      width: 100%;
    }
    
    .history {
      display: flex;
      flex-direction: column;
      text-wrap: wrap;
    }
    
    .history span.error {
      color: red;
    }
    .history span.warning {
      color: yellow;
    }
    .history span.info {
      color: skyblue;
    }
    `;
    shadow.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("container");

    const input_form = document.createElement("form");
    input_form.style.display = "flex";
    input_form.setAttribute("data-test", "input-form");
    const input_sign = document.createElement("span");
    input_sign.textContent = ">";
    input_sign.style.marginRight = "7px";
    input_form.appendChild(input_sign);
    const input = document.createElement("input");
    input.setAttribute("data-test", "input");
    input.type = "text";
    input.classList.add("input");
    input_form.appendChild(input);
    container.appendChild(input_form);

    input_form.addEventListener("submit", (event) => {
      event.preventDefault();
      this.handleCommand(input.value);
      input.value = "";
    });

    this.history.classList.add("history");
    this.history.setAttribute("data-test", "history");
    container.appendChild(this.history);

    shadow.appendChild(container);
    input.focus();
  }

  private handleCommand(input: string) {
    this.output.write(`> ${input}`);
    if (input === "") {
      return;
    }

    const args = input.split(" ").filter((token: string) => token !== "");
    const command_name = args[0];
    const command = this.config.commands.find(
      (command: Command) => command.name === command_name,
    );
    if (command === undefined) {
      this.output.error(`Command not found: ${command_name}`);
      return;
    }

    const exit_code = command.handler({
      args: args,
      output: this.output,
    });
    if (exit_code !== 0) {
      this.output.error(`Exit code ${exit_code}`);
    }
  }
}

const WEB_TERMINAL_TAG = "web-terminal";
if (!customElements.get(WEB_TERMINAL_TAG)) {
  customElements.define(WEB_TERMINAL_TAG, WebTerminal, { extends: "div" });
}

export { WebTerminal, CommandEcho, CommandClear };
