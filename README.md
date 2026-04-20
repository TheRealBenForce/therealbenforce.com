# therealbenforce.com

Personal site of **Ben Force** — enterprise security professional, SOAR developer, and cloud infrastructure engineer.

Built with [Astro](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [shadcn/ui](https://ui.shadcn.com).

## Development

```bash
npm install
npm run dev
```

## Adding Content

### Blog Posts

Create a new `.mdx` file in `src/content/blog/` with this frontmatter:

```yaml
---
id: 2
slug: 'my-post-slug'
title: 'Post Title'
description: 'A short description'
pubDate: 'Month Day, Year'
author: 'Ben Force'
category: 'Security'
readTime: 5
featured: false
---
```

### Pages

Create a new `.md` file in `src/content/pages/` with:

```yaml
---
title: 'Page Title'
description: 'A short description'
---
```

Access at `/pages/your-file-name`.

### Resume Data

Edit the TypeScript files in `src/data/`:

- `experience.ts` — work history
- `education.ts` — degrees
- `certifications.ts` — professional certs
- `projects.ts` — side projects
- `site-config.ts` — name, bio, social links
