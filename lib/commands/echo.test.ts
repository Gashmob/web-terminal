import { beforeEach, describe, expect, it } from "vitest";
import CommandEcho from "./echo.ts";
import type { CommandOutput } from "../configuration";

describe("Command echo", () => {
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
  };

  beforeEach(() => {
    output_text = "";
  });

  it("should print nothing if args are empty", () => {
    const command = new CommandEcho();
    command.handler({
      args: ["echo"],
      output: output,
    });
    expect(output_text).toBe("");
  });

  it("should print args with spaces", () => {
    const command = new CommandEcho();
    command.handler({
      args: ["echo", "hello", "world!"],
      output: output,
    });
    expect(output_text).toBe("hello world!");
  });
});
