# Web terminal

[![Tests](https://github.com/Gashmob/web-terminal/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/Gashmob/web-terminal/actions/workflows/tests.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Fake shell terminal in a web page

This typescript library provide you an HTML custom element allowing you to add a terminal in your web page.

Using it is pretty simple, first add it to your project with your preferred package manager:

```shell
# npm
npm install @gashmob/web-terminal
# pnpm
pnpm add @gashmob/web-terminal
```

Then you can use it directly

```ts
import { WebTerminal } from "@gashmob/web-terminal";

const terminal = new WebTerminal();

document.getElementById("#container").appendChild(terminal);
```

And that's all! You can now see a black terminal on you web page. It takes all the space available inside
the `#container` element.

## Configuration

`WebTerminal` is a typescript class and its constructor has one optional argument: `TerminalConfiguration`. Let's see
what it contains.

```ts
interface TerminalConfiguration {
  filesystem: FilesystemConfiguration;
  commands: Command[];
  style: StyleConfiguration;
}
```

Each property is optional and have a default value.

### File system

This interface helps you to configure a tree structure with directories, files, permissions, ...

```ts
interface FilesystemConfiguration {
  tree: Directory;
  workdir: string;
}
```

You can define directories with:

```ts
interface Directory {
  name: string;
  permission: number; // Linux permissions (755 or 644 for example)
  content: (Directory | File)[];
}
```

And you can define files with:

```ts
interface File {
  name: string;
  permission: number;
  content: string;
}
```

### Commands

You can define a command with this interface:

```ts
interface Command {
  name: string;
  help: string; // Help message
  handler: (CommandParameters) => number;
}
```

`CommandsParameters` is an object which provides you command arguments and some utilities

```ts
interface CommandParameters {
  args: string[];
  output: CommandOutput;
  filesystem: CommandFileSystem;
}

interface CommandOutput {
  write: (string) => void;
  info: (string) => void;
  warning: (string) => void;
  error: (string) => void;
}

interface CommandFileSystem {
  createDir: (string) => void;
  removeDir: (string) => void;
  createFile: (string) => void;
  removeFile: (string) => void;
  writeFile: (string, string) => void; // (file, content)
}
```

There is some pre-defined command that you can add to your config (they are not added by default):

- `cat <file>` -> display content of file
- `ls <directory>` -> display content of directory
- `date` -> display current date
- `pwd` -> display current workdir

### Style

This helps you to customize appearance of your terminal:

```ts
interface StyleConfiguration {
  background: string;
  fontColor: string;
  fontFamily: string;
  // Others style configuration will be determined along implementation
}
```
