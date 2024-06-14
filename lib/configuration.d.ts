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
  output: CommandOutput;
}

export interface CommandOutput {
  write: (text: string) => void;
  info: (text: string) => void;
  warning: (text: string) => void;
  error: (text: string) => void;
  clear: () => void;
}
