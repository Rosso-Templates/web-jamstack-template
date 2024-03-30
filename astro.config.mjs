import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    integrations: [vue()],

    devToolbar: { enabled: false },

    server: {
        port: 3000,
    },

    vite: {
        css: {
            transformer: 'postcss',
        },
    },
});
