import { Command, CommandParameters } from "../configuration";

export default class CommandClear implements Command {
  name = "clear";
  help = "clear the terminal";

  handler(params: CommandParameters): number {
    params.output.clear();
    return 0;
  }
}
