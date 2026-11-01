// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import remarkHeadingId from 'remark-heading-id';


// https://astro.build/config
export default defineConfig({
    site: 'https://moono.dev',
    integrations: [mdx({
        processor: unified({
            remarkPlugins: [remarkHeadingId]
        })
    })]
});
