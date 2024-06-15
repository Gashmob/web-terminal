import { describe, expect, it } from "vitest";
import type { CommandOutput } from "../configuration";
import CommandClear from "./clear.ts";

describe("Command clear", () => {
  let output_text = "";
  const output: CommandOutput = {
    error(_: string): void {
      throw new Error("should not have been called");
    },
    info(_: string): void {
      throw new Error("should not have been called");
    },
    warning(_: string): void {
      throw new Error("should not have been called");
    },
    write(text: string): void {
      output_text += text;
    },
    clear(): void {
      output_text = "";
    },
  };

  it("should clear the terminal", () => {
    output_text = "a very very long text";
    const command = new CommandClear();
    command.handler({
      args: ["clear"],
      output: output,
    });
    expect(output_text).toBe("");
  });
});
