import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

// HTTPS HOST SETUP
const host = process.env.SERVE_HOST || "localhost";

if (host === "localhost") {
  console.log("SERVE_HOST not set, using localhost");
} else {
  console.log("SERVE_HOST: " + host);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  server: {
    host,
    hmr: {
      host,
    },
  },
});
