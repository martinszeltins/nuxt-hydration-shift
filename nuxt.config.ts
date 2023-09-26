import { fileURLToPath } from 'node:url'
import * as appConfig from './common/config/app'
import vite from './common/config/nuxt/vite.config'
import i18n from './common/config/nuxt/i18n.config'
import postcss from './common/config/nuxt/postcss.config'
import tailwindcss from './common/config/nuxt/tailwindcss.config'

export default defineNuxtConfig({
    runtimeConfig: {
        public: {
            ...appConfig
        }
    },

    modules: [
        '@vueuse/nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
    ],

    alias: {
        '@img': fileURLToPath(new URL('./common/assets/img', import.meta.url)),
    },

    serverDir: './common/server',

    dir: {
        assets: './common/assets',
        layouts: './common/layouts',
        middleware: './common/middleware',
        modules: './common/modules',
        pages: './common/pages',
        plugins: './common/plugins',
        public: './common/public',
        static: './common/static',
    },

    components: [
        {
            path: '~/common/components',
        },

        {
            path: '~/pages/components',
        },

        {
            path: '~/shipping-labels/components',
        },

        {
            path: '~/shipping-labels/single-label/components',
        },
    ],

    imports: {
        dirs: [
            'common/**/*.ts',
            'shipping-labels/**/*.ts',
        ]
    },

    css: ['~/common/assets/css/app.css'],

    build: {
        // Libraries that don't play nice with modern web need to be transpiled.
        transpile: [
            'primevue',
            '@fortawesome/vue-fontawesome',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/pro-solid-svg-icons',
        ]
    },

    devtools: {
        enabled: true,
    },

    vite: vite,
    tailwindcss: tailwindcss,
    postcss: postcss,
    i18n: i18n,
})
