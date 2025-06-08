import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
