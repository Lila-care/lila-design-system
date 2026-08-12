import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// Ships plain ESM + untouched CSS custom properties (tokens.css) — no Tailwind utility
// compilation happens here. The consuming app's own Tailwind v4 build scans dist/**/*.js
// (via an `@source` directive) to generate the utility classes these components reference,
// so there is exactly one compiled Tailwind output per consumer, not one per package.
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "index.js",
    },
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime",
        "class-variance-authority",
        "clsx",
        "lucide-react",
        "radix-ui",
        "tailwind-merge",
      ],
    },
    sourcemap: true,
    emptyOutDir: false,
  },
});
