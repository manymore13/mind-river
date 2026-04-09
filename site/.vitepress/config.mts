import { defineConfig } from 'vitepress'
import nav from './nav'
import sidebar from './sidebar'

export default defineConfig({
  title: 'Personal Knowledge Base',
  description: 'A personal website for knowledge management',

  // Output directory
  outDir: 'dist',
  cacheDir: '.vitepress/cache',

  // Theme configuration
  themeConfig: {
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: 'Copyright © 2026'
    }
  },

  // Markdown configuration
  markdown: {
    lineNumbers: true
  },

  // Head configuration
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
  ],

  // Build configuration
  cleanUrls: true,
  lastUpdated: true,

  // Ignore dead links for now
  ignoreDeadLinks: true,
})
