import { resolve } from "node:path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "lib/main.ts"),
      name: "web-terminal",
      fileName: "web-terminal",
    },
  },
  plugins: [dts({ exclude: ["**/*.test.ts", "src/**/*"] })],
});
