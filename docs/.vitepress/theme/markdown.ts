import { MarkdownOptions } from "vitepress";
import timeline from "vitepress-markdown-timeline";

const markdown: MarkdownOptions = {
  
  // Shiki主题, 所有主题参见: https://github.com/shikijs/shiki/blob/main/docs/themes.md
  lineNumbers: true, // 启用行号

  // 在所有文档的<h1>标签后添加<ArticleMetadata/>组件
  config: (md) => {
    md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
      let htmlResult = slf.renderToken(tokens, idx, options);
      if (tokens[idx].tag === "h1")
        htmlResult += `\n<ClientOnly><ArticleMetadata /></ClientOnly>`;
      return htmlResult;
    };
    md.use(timeline);
    
  },
};
export default markdown;


