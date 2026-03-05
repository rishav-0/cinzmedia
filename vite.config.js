import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [
    tailwindcss(),
    react(),
    Sitemap({
      hostname: "https://cinzmedia.com",
      dynamicRoutes: [
        "/webdev",
        "/graphic",
        "/videoediting",
        "/brandbuilding",
        "/socialmediamarketing",
        "/digitalmarketing",
        "/portfolio",
      ],
    }),
  ],
  resolve: {
    alias: {
      "react-native": "react-native-web",
    },
  },
});
