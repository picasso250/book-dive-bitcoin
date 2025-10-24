import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  // 网站的标题和描述，这是最重要的配置
  title: "深入比特币",
  description: "一本关于比特币原理的在线书籍",
  
  // 主题配置
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    
    // 顶部导航栏
    nav: [
      { text: '主页', link: '/' },
      { text: '目录', link: '/book/chapter1' } // 直接链接到第一章
    ],

    // 侧边栏：这是书籍结构的核心
    sidebar: [
      {
        text: '书籍目录', // 侧边栏分组标题
        // collapsed: false, // 如果希望默认展开，可以设置 false
        items: [
          // 这里的 link 必须与您的文件路径完全对应
          { text: '第一章：比特币的诞生', link: '/book/chapter1' },
          { text: '第二章：比特币的引擎', link: '/book/chapter2' },
          { text: '第三章：一笔交易的生命周期', link: '/book/chapter3' },
          { text: '第四章：特性与局限', link: '/book/chapter4' }
        ]
      }
    ],

    socialLinks: [
      // 您可以替换成自己的 GitHub 链接
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

// 如果您的书中用到了 mermaid 图表，请保留此项
export default withMermaid(config)