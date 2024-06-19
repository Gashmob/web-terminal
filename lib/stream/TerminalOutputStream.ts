import { OutputStream } from "../types";

export class TerminalOutputStream implements OutputStream {
  private terminal: HTMLDivElement;
  private buffer: string = "";

  constructor(terminal: HTMLDivElement) {
    this.terminal = terminal;
  }

  write(text: string): void {
    this.buffer += text;
  }

  writeline(text: string): void {
    const line = document.createElement("span");
    line.innerHTML = this.buffer + text;
    this.terminal.appendChild(line);
  }

  flush(): void {
    this.writeline("");
    this.buffer = "";
  }
}
