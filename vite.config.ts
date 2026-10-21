import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Static prerendering (vite-react-ssg): emit <route>/index.html so every
  // page is served at a clean URL (/about, /services/seo, ...) with no rewrites.
  ssgOptions: {
    dirStyle: "nested",
  },
}));
