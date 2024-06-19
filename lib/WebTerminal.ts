import type { TerminalConfiguration } from "./types";
import { ShellCommand } from "./commands/shell.ts";
import { UserInputStream } from "./stream/UserInputStream.ts";
import { TerminalOutputStream } from "./stream/TerminalOutputStream.ts";

export class WebTerminal extends HTMLDivElement {
  private readonly config: TerminalConfiguration;

  public constructor(
    config: TerminalConfiguration = {
      commands: [],
    },
  ) {
    super();

    this.config = config;
  }

  public connectedCallback(): void {
    this.buildTerminal();
  }

  /**
   * *--------------------------*
   * |                          |
   * |                          |
   * |                          |
   * |                          |
   * |                          |
   * | Text 1                   |
   * | Text 2                   |
   * | Text 3                   |
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
      overflow-y: scroll;
    }
    
    .terminal {
      display: flex;
      flex-direction: column;
    }
    `;
    shadow.appendChild(style);

    const container = document.createElement("div");
    container.classList.add("container");
    const terminal = document.createElement("div");
    terminal.classList.add("terminal");
    container.appendChild(terminal);
    shadow.appendChild(container);
    terminal.focus();

    const shell = new ShellCommand();
    shell.handler({
      args: ["shell"],
      input: new UserInputStream(),
      output: new TerminalOutputStream(terminal),
    });
  }
}

const WEB_TERMINAL_TAG = "web-terminal";
if (!customElements.get(WEB_TERMINAL_TAG)) {
  customElements.define(WEB_TERMINAL_TAG, WebTerminal, { extends: "div" });
}
