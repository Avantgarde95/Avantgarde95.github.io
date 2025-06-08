import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: true,
    },
  },

  integrations: [preact()],
});
