import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";

/**
 * MDX can't parse autolinks (<https://example.com>),
 * so we need to patch them before processing.
 */
function fixAutolinkPlugin() {
  return {
    name: "vite-plugin-fix-autolink",
    enforce: "pre",
    transform(code, id) {
      if (id.endsWith(".mdx")) {
        const patched = code.replace(/<((https?:\/\/)[^>\s]+)>/g, (_, url) => {
          return `[${url}](${url})`;
        });
        return { code: patched };
      }
    },
  };
}

export default defineConfig({
  i18n: {
    locales: ["ko", "en"],
    defaultLocale: "ko",
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "andromeeda",
      },
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeRaw],
    }),
  ],
  vite: {
    plugins: [fixAutolinkPlugin(), tailwindcss()],
  },
});
