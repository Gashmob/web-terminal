export interface TerminalConfiguration {
  commands: Command[];
}

export interface Command {
  name: string;
  help: string;
  handler: (params: CommandParameters) => number;
}

export interface CommandParameters {
  args: string[];
}
