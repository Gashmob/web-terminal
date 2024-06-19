import type { InputStream } from "../types";

export class UserInputStream implements InputStream {
  private buffer: string = "";
  private shift: boolean = false;

  constructor() {
    document.addEventListener("keydown", (event) => {
      if (event.ctrlKey || event.altKey) {
        return;
      }

      if (event.shiftKey) {
        this.shift = true;
      }

      switch (event.key) {
        case "Enter":
          this.buffer += "\n";
          break;
        case "Shift":
        case "Control":
        case "AltGraph":
        case "CapsLock":
          break;
        default:
          if (this.shift) {
            this.buffer += event.key.toUpperCase();
          } else {
            this.buffer += event.key;
          }
      }
    });

    document.addEventListener("keyup", (event) => {
      if (event.key === "Shift") {
        this.shift = false;
      }
    });
  }

  private async waitBufferNotEmpty(): Promise<void> {
    if (this.buffer === "") {
      setTimeout(this.waitBufferNotEmpty, 10);
    }
  }

  async read(): Promise<string> {
    await new Promise(this.waitBufferNotEmpty);

    const result = this.buffer.charAt(0);
    this.buffer = this.buffer.substring(1);
    return result;
  }

  async readline(): Promise<string> {
    let collector: string = await this.read();
    while (collector.charAt(collector.length - 1) !== "\n") {
      collector += await this.read();
    }

    return collector;
  }
}
