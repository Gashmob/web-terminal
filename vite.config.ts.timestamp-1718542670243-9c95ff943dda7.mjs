// vite.config.ts
import { resolve } from "node:path";
import { defineConfig } from "file:///home/kevin/DATA/Programmation/JS/web-terminal/node_modules/.pnpm/vite@5.2.10_@types+node@20.14.2/node_modules/vite/dist/node/index.js";
import dts from "file:///home/kevin/DATA/Programmation/JS/web-terminal/node_modules/.pnpm/vite-plugin-dts@3.9.1_@types+node@20.14.2_rollup@4.18.0_typescript@5.4.5_vite@5.2.10_@types+node@20.14.2_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname =
  "/home/kevin/DATA/Programmation/JS/web-terminal";
var vite_config_default = defineConfig({
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/main.ts"),
      name: "web-terminal",
      fileName: "web-terminal",
    },
  },
  plugins: [
    dts({
      rollupTypes: true,
      exclude: ["**/*.test.ts", "src/**/*"],
    }),
  ],
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9rZXZpbi9EQVRBL1Byb2dyYW1tYXRpb24vSlMvd2ViLXRlcm1pbmFsXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9rZXZpbi9EQVRBL1Byb2dyYW1tYXRpb24vSlMvd2ViLXRlcm1pbmFsL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2tldmluL0RBVEEvUHJvZ3JhbW1hdGlvbi9KUy93ZWItdGVybWluYWwvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCBkdHMgZnJvbSBcInZpdGUtcGx1Z2luLWR0c1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBidWlsZDoge1xuICAgIGxpYjoge1xuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcImxpYi9tYWluLnRzXCIpLFxuICAgICAgbmFtZTogXCJ3ZWItdGVybWluYWxcIixcbiAgICAgIGZpbGVOYW1lOiBcIndlYi10ZXJtaW5hbFwiLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICBleGNsdWRlOiBbXCIqKi8qLnRlc3QudHNcIiwgXCJzcmMvKiovKlwiXSxcbiAgICB9KSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLGVBQWU7QUFDcFYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBRmhCLElBQU0sbUNBQW1DO0FBSXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxhQUFhO0FBQUEsTUFDdkMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsZ0JBQWdCLFVBQVU7QUFBQSxJQUN0QyxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
