import { defineConfig } from "cypress";
import coverage from "@cypress/code-coverage/task";

export default defineConfig({
  component: {
    devServer: {
      framework: "cypress-ct-qwik" as any,
      bundler: "vite",
    },
    setupNodeEvents(on, config) {
      coverage(on, config);

      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
});
