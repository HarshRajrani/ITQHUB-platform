import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
    },
  },

  server: {
    host: "0.0.0.0",
    port: process.env.PORT || 5173,

    allowedHosts: [
      "itqhub-platform.onrender.com",
    ],

    proxy: {
      "/api": {
        target: "https://itqhub-platform-backend.onrender.com",
        changeOrigin: true,
      },
    },
  },

  preview: {
    host: "0.0.0.0",
    port: process.env.PORT || 4173,
    allowedHosts: [
      "itqhub-platform.onrender.com",
    ],
  },
});