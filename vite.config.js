import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import envPlugin from "@vitejs/plugin-env";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), envPlugin()],
});
