import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx",               // allow JSX in .js files
    include: /src\/.*\.js$/,     // only in src folder
  },
});