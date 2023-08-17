import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import vitePluginRaw from "vite-plugin-raw";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ root: "../../" }),
    vitePluginRaw({
      match: [],
    }),
  ],
  server: {
    fs: {
      allow: ["../../"],
    },
  },
  preview: {
    headers: {
      "Cache-Control": "public, max-age=600",
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "../../packages/yasa/styles/abstracts" as *;`,
      },
    },
  },
});
