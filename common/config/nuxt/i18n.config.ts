import type { NuxtI18nOptions } from '@nuxtjs/i18n/dist/module'

export default {
    locales: [
        { code: 'en', file: 'en.json' },
        { code: 'de', file: 'de.json' },
    ],
    lazy: false,
    langDir: 'common/lang',
    defaultLocale: 'en',
    detectBrowserLanguage: {
        useCookie: true,
        redirectOn: 'no prefix',
    },
} satisfies NuxtI18nOptions
