import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// "@" apunta al src real de lila-web (no al de esta app) para que los componentes
// y utils que importamos aquí (Sidebar, EmptyState, cn, etc.) se resuelvan contra la
// fuente original — así el catálogo nunca duplica ni se desincroniza del código real.
// "@sketch" apunta al src propio de este sketchbook.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "../lila-web/src"),
      "@sketch": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5180,
    strictPort: true,
    fs: {
      allow: [path.resolve(__dirname, ".."), path.resolve(__dirname, "../lila-web")],
    },
  },
});
