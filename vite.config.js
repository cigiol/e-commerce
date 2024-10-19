import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": resolve(__dirname, "src/components"),
      "@pages": resolve(__dirname, "src/pages"),
      "@assets": resolve(__dirname, "src/assets"),
      "@constant": resolve(__dirname, "src/constant"),
      "@store": resolve(__dirname, "src/store"),
      "@utils": resolve(__dirname, "src/utils"),
    },
  },
});
