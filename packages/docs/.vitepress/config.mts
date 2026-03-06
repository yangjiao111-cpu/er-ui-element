import { defineConfig } from 'vitepress'
import {
  containerPreview,
  componentPreview,
} from "@vitepress-demo-preview/plugin";


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Er-UI-Element",
  description: "高 仿 ElementPlus 组 件 库",
  base: "/er-ui-element/",
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '开始使用', link: '/get-started' },
      { text: '组件', link: '/components/button' }
    ],
    search: {
      provider: "local"
    },
    sidebar: [
      {
        text: "指南",
        collapsed: false,
        items: [{ text: "快速开始", link: "/get-started" }],
      },
      {
        text: "基础组件",
        collapsed: false,
        items: [
          { text: "Button 按钮", link: "components/button" },
          { text: "Collapse 折叠面板", link: "components/collapse" },

        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yangjiao111-cpu/er-ui-element' }
    ]
  },
  markdown: {
    config(md) {
      md.use(containerPreview);
      md.use(componentPreview);
    },
  },
})
