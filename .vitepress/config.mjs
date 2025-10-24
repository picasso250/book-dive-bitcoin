// .vitepress/config.mjs
import { defineConfig } from 'vitepress'
// 1. 正确地导入 withMermaid 函数
import { withMermaid } from "vitepress-plugin-mermaid";

// 2. 像往常一样定义您的配置，但先不要导出
const config = defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

// 3. 使用 withMermaid 包装您的配置并导出
export default withMermaid(config)