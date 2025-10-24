import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
const config = defineConfig({
  // 网站的标题和描述，这是最重要的配置
  title: "区块链ABC",
  description: "一部由技术理想与资本现实驱动的区块链演进史",
  
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
        collapsed: false, // 如果希望默认展开，可以设置 false
        items: [
          // 这里的 link 必须与您的文件路径完全对应
          { text: '第一章：比特币的诞生', link: '/book/chapter1' },
          { text: '第二章：比特币的引擎', link: '/book/chapter2' },
          { text: '第三章：一笔交易的生命周期', link: '/book/chapter3' },
          { text: '第四章：特性与局限', link: '/book/chapter4' },
          { text: '第五章：看不见的战争', link: '/book/chapter5' },
          { text: '第六章：第一次改良尝试', link: '/book/chapter6' },
          { text: '第七章：以太坊诞生前的交易所', link: '/book/chapter7' },
          { text: '第八章：第二次革命——以太坊', link: '/book/chapter8' },
          { text: '第九章：看不见的双手', link: '/book/chapter9' },
          { text: '第十章：金钱乐高与流动性狂潮', link: '/book/chapter10' },
          { text: '第十一章：世界计算机的“堵车”难题', link: '/book/chapter11' },
          { text: '第十二章：赌场之王', link: '/book/chapter12' },
          { text: '第十三章：美元的幽灵——稳定币', link: '/book/chapter13' },
          { text: '第十四章：真理的API', link: '/book/chapter14' },
          { text: '第十五章：救生筏与走私船', link: '/book/chapter15' },
          { text: '第十六章：帝国的规训', link: '/book/chapter16' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/picasso250/book-dive-bitcoin' }
    ]
  }
})

export default withMermaid(config)
