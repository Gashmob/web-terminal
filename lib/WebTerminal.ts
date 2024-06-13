export default class WebTerminal extends HTMLDivElement {
  private readonly history: HTMLDivElement;

  public constructor() {
    super();

    this.history = document.createElement("div");
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
    }
    
    .input {
      border: none;
      outline: none;
      width: 100%;
    }
    
    .history {
      display: flex;
      flex-direction: column;
      //justify-content: end;
      overflow-y: scroll;
      text-wrap: wrap;
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
      const command = input.value;
      this.writeToHistory(`> ${command}`);
      input.value = "";
    });

    this.history.classList.add("history");
    this.history.setAttribute("data-test", "history");
    container.appendChild(this.history);

    shadow.appendChild(container);
    input.focus();
  }

  private writeToHistory(text: string) {
    const span = document.createElement("span");
    span.textContent = text;
    this.history.appendChild(span);
  }
}

export const WEB_TERMINAL_TAG = "web-terminal";
if (!customElements.get(WEB_TERMINAL_TAG)) {
  customElements.define(WEB_TERMINAL_TAG, WebTerminal, { extends: "div" });
}
