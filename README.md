# Web terminal

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
import { WebTerminal } from "@gashmob/web-terminal"

const terminal = new WebTerminal();

document.getElementById('#container').appendChild(terminal);
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

### Commands

### Style
