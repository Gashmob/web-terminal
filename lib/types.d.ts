export type TerminalConfiguration = {
  commands: Command[];
};

export type Command = {
  name: string;
  help: string;
  handler: (params: CommandParameters) => number;
};

export type CommandParameters = {
  args: string[];
  input: InputStream;
  output: OutputStream;
};

export type InputStream = {
  read: () => Promise<string>;
  readline: () => Promise<string>;
};

export type OutputStream = {
  write: (text: string) => void;
  writeline: (text: string) => void;
  flush: () => void;
};
