import type { CommandOutput } from "./configuration";

export default class Output implements CommandOutput {
  private readonly out: HTMLDivElement;

  constructor(out: HTMLDivElement) {
    this.out = out;
  }

  error(text: string): void {
    const span = document.createElement("span");
    span.classList.add("error");
    span.textContent = text;
    this.out.appendChild(span);
  }

  info(text: string): void {
    const span = document.createElement("span");
    span.classList.add("info");
    span.textContent = text;
    this.out.appendChild(span);
  }

  warning(text: string): void {
    const span = document.createElement("span");
    span.classList.add("warning");
    span.textContent = text;
    this.out.appendChild(span);
  }

  write(text: string): void {
    const span = document.createElement("span");
    span.textContent = text;
    this.out.appendChild(span);
  }

  clear(): void {
    this.out.innerHTML = "";
  }
}
