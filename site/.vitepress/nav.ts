import type { DefaultTheme } from 'vitepress'

export default [
  { text: '首页', link: '/' },
  { text: '原始资料', link: '/raw/' },
  { text: '知识库', link: '/wiki/' },
  { text: '博客', link: '/blog/' },
  { text: '项目', link: '/projects/' },
] satisfies DefaultTheme.NavItem[]
