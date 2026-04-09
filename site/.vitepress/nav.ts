import type { DefaultTheme } from 'vitepress'

export default [
  { text: '首    页', link: '/' },
  { text: '笔记', link: '/raw/' },
  { text: '知识库', link: '/wiki/' },
//   { text: '博客', link: '/blog/' },
//   { text: '项目', link: '/projects/' },
] satisfies DefaultTheme.NavItem[]
