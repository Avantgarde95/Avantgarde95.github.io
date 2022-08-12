import { Renderer, marked } from "marked";
import TextRenderer from "marked-plaintext";
import highlight from "highlight.js";

function parseYouTubeURL(url: string) {
  const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  const match = url.match(regExp);

  return match && match[7].length === 11 ? match[7] : null;
}

class PostRenderer extends Renderer {
  constructor(options: marked.MarkedOptions) {
    super(options);
  }

  code(code: string, languageInfo: string | undefined, isEscaped: boolean): string {
    const matchedWords = languageInfo?.match(/\S*/) ?? null;
    const language = matchedWords === null || matchedWords.length === 0 ? null : matchedWords[0];

    const out =
      language === null || language.length === 0 || ["text", "literal", "nohighlight"].includes(language)
        ? `<pre class="hljs">${code}</pre>`
        : `<span class="hljs">${highlight.highlight(code, { language }).value}</span>`;

    return super.code(out, languageInfo, true);
  }

  link(href: string | null, title: string | null, text: string): string {
    const youTubeID = parseYouTubeURL(href ?? "");

    if (youTubeID === null) {
      const out = super.link(href, title, text);
      return `<a target="_blank" rel="noopener noreferrer" ${out.substr(2)}`;
    } else {
      return `
        <div class="PostYouTubeOuterContainer">
          <div class="PostYouTubeInnerContainer">
            <iframe
              class="PostYouTube"
              width="560"
              height="315"
              frameBorder="0"
              allowFullScreen="true"
              src="https://www.youtube.com/embed/${youTubeID}"
            >
          </div>
        </div>
      `;
    }
  }

  image(href: string | null, title: string | null, text: string): string {
    const out = super.image(href, title, text);
    return `<img class="PostImage"${out.slice(4)}`;
  }
}

const postRenderer = new PostRenderer({});

export function markdownToHTML(markdown: string) {
  return marked(markdown, { renderer: postRenderer });
}

const textRenderer = new TextRenderer({});

export function markdownToText(markdown: string) {
  return marked(markdown, { renderer: textRenderer });
}
