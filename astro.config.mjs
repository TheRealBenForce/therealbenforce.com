// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

export default defineConfig({
  site: 'https://therealbenforce.com',
  integrations: [
    react(),
    mdx(),
    sitemap({
      filter: page => !page.includes('/admin/') && !page.includes('/private/'),
      customPages: [],
      serialize(item) {
        // Homepage - highest priority
        if (item.url === 'https://therealbenforce.com/') {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'weekly'
          item.priority = 1.0
        }

        // About / Resume page - high priority
        else if (item.url.includes('/about')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.9
        }

        // Blog listing pages - high priority
        else if (item.url.includes('/blog') && !item.url.includes('/blog/')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'weekly'
          item.priority = 0.9
        }

        // Individual blog posts - medium-high priority
        else if (item.url.includes('/blog/')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.8
        }

        // Pages - medium priority
        else if (item.url.includes('/pages/')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.7
        }

        // All other pages
        else {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.6
        }

        return item
      }
    })
  ],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild',
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    },
    ssr: {
      noExternal: ['@radix-ui/*']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
})
