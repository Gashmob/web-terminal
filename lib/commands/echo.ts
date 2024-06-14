import type { Command, CommandParameters } from "../configuration";

export default class CommandEcho implements Command {
  name: string = "echo";
  help: string = "print arguments";

  handler(params: CommandParameters): number {
    params.args.shift();
    params.output.write(params.args.join(" "));

    return 0;
  }
}
