import type { Command, CommandParameters } from "../types";

export class ShellCommand implements Command {
  name = "shell";
  help = "host of the terminal";

  handler(_params: CommandParameters): number {
    return 0;
  }
}
