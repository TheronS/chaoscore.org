import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig  } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
// import { fs } from "fs";

// const key = fs.readFileSync(import.meta.env.VITE_SRV_KEY_PATH);
// const cert = fs.readFileSync(import.meta.env.VITE_SRV_SSL_CERT_PATH);

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    port: 3001,
    // https:
    //   key: fs.readFileSync(import.meta.env.VITE_SRV_KEY_PATH),
    //   cert: fs.readFileSync(import.meta.env.VITE_SRV_SSL_CERT_PATH)
    //
  },
})