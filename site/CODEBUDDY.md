# CODEBUDDY.md

This file provides guidance to CodeBuddy Code when working with code in this repository.

## Site Structure

```
site/
├── .vitepress/     # VitePress configuration and theme
├── wiki/           # Knowledge base (LLM maintained)
├── blog/           # Blog posts
├── projects/       # Project showcases
├── index.md        # Site homepage
└── log.md          # Update log
```

## Three-Layer Architecture

Based on `llm-wiki.md` design:

| Layer | Location | Description |
|-------|----------|-------------|
| Raw Sources | `raw/` (symlinked to `site/raw/`) | Immutable source documents |
| Knowledge Wiki | `site/wiki/` | LLM-maintained structured pages |
| Configuration | `site/CODEBUDDY.md` | This file - LLM workflow definitions |

## LLM Maintenance Workflow

### 1. Ingest New Source

When user adds a new source to `raw/`:

1. Read the source file
2. Create a summary page in `site/wiki/notes/`
3. Update `site/log.md` with the ingest entry
4. Add cross-references in related pages

Example frontmatter for raw source:
```yaml
---
title: Article Title
date: 2026-04-09
source: https://example.com/original
wiki: /wiki/notes/article-summary
tags:
  - tag1
  - tag2
---
```

Example frontmatter for wiki summary:
```yaml
---
title: Article Summary
date: 2026-04-09
source: /raw/article-name
tags:
  - tag1
---
```

### 2. Update Index

When adding new content:

1. Add entry to appropriate index page:
   - `raw/index.md` for raw sources
   - `site/wiki/index.md` for wiki pages
2. Update sidebar in `.vitepress/sidebar.ts` if needed

### 3. Maintain Log

`site/log.md` format:
```markdown
## [YYYY-MM-DD] action | Title

Description of what was done.
```

## Content Categories

### wiki/concepts/

Definition pages for terms and concepts.

Format:
```markdown
---
title: Concept Name
---

# Concept Name

## Definition

Brief definition.

## Explanation

Detailed explanation.

## Related Concepts

- [[Concept A]]
- [[Concept B]]
```

### wiki/topics/

Topic exploration pages.

Format:
```markdown
---
title: Topic Name
---

# Topic Name

## Overview

## Key Points

## References

- [Source 1](/raw/source-1)
```

### wiki/notes/

Reading notes and summaries.

Format:
```markdown
---
title: Note Title
date: YYYY-MM-DD
source: /raw/article-name
---

# Note Title

## Summary

## Key Takeaways

## Related Notes

- [[Note A]]
```

### blog/posts/

Blog articles.

Format:
```markdown
---
title: Article Title
date: YYYY-MM-DD
tags:
  - tag1
---

# Article Title

Content...
```

### projects/demos/

Project showcase pages.

Format:
```markdown
---
title: Project Name
date: YYYY-MM-DD
tags:
  - tag1
---

# Project Name

## Overview

## Features

## Tech Stack

## Links

- [GitHub](...)
- [Demo](...)
```

## Cross-Reference Syntax

Use standard Markdown links for cross-references:

```markdown
- [Related Article](/raw/article-name)
- [Wiki Summary](/wiki/notes/article-summary)
- [Concept](/wiki/concepts/concept-name)
```

## When to Update

- **Ingest**: When user provides new source material
- **Query**: When user asks questions, create summary pages for useful answers
- **Lint**: Periodically check for:
  - Broken links
  - Missing cross-references
  - Contradictions between pages
  - Outdated information
