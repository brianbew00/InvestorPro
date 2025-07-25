import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig({
  plugins: [
    react(),
    runtimeErrorOverlay(),
    ...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
      ? [
          await import("@replit/vite-plugin-cartographer").then((m) =>
            m.cartographer()
          ),
        ]
      : []),
  ],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
        about: path.resolve(__dirname, "about.html"),
        calendar: path.resolve(__dirname, "calendar.html"),
        compliance: path.resolve(__dirname, "compliance.html"),
        dataroom: path.resolve(__dirname, "dataroom.html"),
        howitworks: path.resolve(__dirname, "howitworks.html"),
        investortypes: path.resolve(__dirname, "investortypes.html"),
        offerings: path.resolve(__dirname, "offerings.html"),
        resources: path.resolve(__dirname, "resources.html"),
        notfound: path.resolve(__dirname, "not-found.html"),
      },
    },
  },
});