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
  input: InputStream;
  output: OutputStream;
}

export interface InputStream {
  read: () => Promise<string>;
  readline: () => Promise<string>;
}

export interface OutputStream {
  write: (text: string) => void;
  writeline: (text: string) => void;
  flush: () => void;
}
