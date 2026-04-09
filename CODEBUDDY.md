# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## Repository Structure

This is a personal knowledge base website built with VitePress.

```
github_blog/
├── README.md           # Repository description
├── LICENSE             # MIT License
├── llm-wiki.md         # Original design document
│
├── raw/                # Original resources (immutable, LLM read-only)
│   ├── index.md        # Raw resources list page
│   ├── *.md            # Original articles
│   └── assets/         # Images and other assets
│
└── site/               # Website source code
    ├── .vitepress/     # VitePress configuration
    ├── wiki/           # Knowledge base (LLM maintained)
    ├── blog/           # Blog posts
    ├── projects/       # Project showcases
    ├── CODEBUDDY.md    # Site-specific LLM instructions
    └── log.md          # Update log
```

## Three-Layer Architecture

Based on `llm-wiki.md` design:

| Layer | Location | Description |
|-------|----------|-------------|
| Raw Sources | `raw/` | Immutable source documents, LLM reads only |
| Knowledge Wiki | `site/wiki/` | LLM-maintained structured pages |
| Configuration | `site/CODEBUDDY.md` | LLM workflow definitions |

## Commands

```bash
# Install dependencies
cd site && npm install

# Development server
cd site && npm run dev

# Build for production
cd site && npm run build

# Preview production build
cd site && npm run preview
```

## Key Files

| File | Purpose |
|------|---------|
| `site/.vitepress/config.mts` | VitePress main configuration |
| `site/.vitepress/nav.ts` | Navigation bar configuration |
| `site/.vitepress/sidebar.ts` | Sidebar configuration |
| `site/CODEBUDDY.md` | LLM maintenance instructions |
