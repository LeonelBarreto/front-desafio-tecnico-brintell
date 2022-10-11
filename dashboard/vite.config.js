import { builtinModules } from "module";
import { defineConfig } from "vite";
import ignore from "rollup-plugin-ignore";

export default defineConfig({
  build: {
    rollupOptions: {
      plugins: [ignore([...builtinModules, "ws"])],
      // or:
      // plugins: [ignore(["ws", "fs", "child_process", "crypto", "path"])],
    },
  },
});