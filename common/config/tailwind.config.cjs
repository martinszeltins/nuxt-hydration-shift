/** @type {import('tailwindcss').Config} */
const defaultColors = require('tailwindcss/colors')

/** Delete old deprecated colors to avoid warnings */
delete defaultColors['lightBlue']
delete defaultColors['warmGray']
delete defaultColors['trueGray']
delete defaultColors['coolGray']
delete defaultColors['blueGray']

let colors = {
    ...defaultColors,
    ...{
        'primary-50': '#f0f8ff',
        'primary-100': '#dff0ff',
        'primary-200': '#b9e1fe',
        'primary-300': '#7bcafe',
        'primary-400': '#34aefc',
        'primary-500': '#0a95ed',
        'primary-600': '#0075cb',
        'primary-700': '#0060a9',
        'primary-800': '#055087',
        'primary-900': '#0a4270',
        'primary-950': '#072a4a',

        'secondary-50': '#fef2f2',
        'secondary-100': '#ffe1e2',
        'secondary-200': '#ffc8ca',
        'secondary-300': '#ffa2a6',
        'secondary-400': '#fd6c72',
        'secondary-500': '#f53e45',
        'secondary-600': '#e53138',
        'secondary-650': '#d2242b',
        'secondary-700': '#bf161d',
        'secondary-800': '#9e161b',
        'secondary-900': '#83191d',
        'secondary-950': '#47080a',

        'gunmetal-50': '#f3f6f8',
        'gunmetal-100': '#e2e8eb',
        'gunmetal-200': '#c7d2da',
        'gunmetal-300': '#a1b3bf',
        'gunmetal-400': '#728b9e',
        'gunmetal-500': '#576f83',
        'gunmetal-600': '#4b5d6f',
        'gunmetal-700': '#414f5d',
        'gunmetal-800': '#3b444f',
        'gunmetal-900': '#2d333b',
        'gunmetal-1000': '#262b32',

        'iron-50': '#f3f6f8',
        'iron-100': '#e1e8ec',
        'iron-200': '#c6d2db',
        'iron-300': '#9fb2c1',
        'iron-400': '#708ba0',
        'iron-500': '#556f85',
        'iron-600': '#495d71',
        'iron-700': '#404f5e',
        'iron-800': '#3a4450',
        'iron-900': '#22272e',

        'shark-50': '#f3f6f8',
        'shark-100': '#e0e8ed',
        'shark-200': '#c4d2dd',
        'shark-300': '#9cb4c4',
        'shark-400': '#6c8ca4',
        'shark-500': '#506f8a',
        'shark-600': '#455c75',
        'shark-700': '#3d4e61',
        'shark-800': '#384452',
        'shark-900': '#1c2128',

        'trout-50': '#f4f6f7',
        'trout-100': '#e2e7eb',
        'trout-200': '#c8d2d9',
        'trout-300': '#a1b2bf',
        'trout-400': '#748b9c',
        'trout-500': '#587082',
        'trout-600': '#4c5d6e',
        'trout-700': '#424e5c',
        'trout-800': '#3b444f',
        'trout-900': '#373e47',

        'casper-50': '#f5f7f9',
        'casper-100': '#e9ecf0',
        'casper-200': '#d8dfe5',
        'casper-300': '#bdc8d3',
        'casper-400': '#adbac7',
        'casper-500': '#8696ab',
        'casper-600': '#74839c',
        'casper-700': '#68748d',
        'casper-800': '#586175',
        'casper-900': '#49505f',

        'ground-50': '#f4f6f7',
        'ground-100': '#e3e7ea',
        'ground-200': '#cad1d7',
        'ground-300': '#a6b1ba',
        'ground-400': '#7a8896',
        'ground-500': '#5f6d7b',
        'ground-600': '#515c69',
        'ground-700': '#464e58',
        'ground-800': '#3e434c',
        'ground-900': '#373b42',
    }
}

/** Color aliases */
colors = {
    ...colors,
    ...{
        'primary':   colors['primary-700'],
        'secondary': colors['secondary-600'],
        'negative':  colors.red['500'],
        'positive':  colors.emerald['500'],
        'warning':   colors.amber['500'],
        'info':      colors.blue['500'],
    }
}

module.exports = {
    content: [
        './app.vue',
        './common/**/*.{vue,ts}',
        './auth/**/*.{vue,ts}',
        './manifest-profiles/**/*.{vue,ts}',
        './organizations/**/*.{vue,ts}',
        './printing/**/*.{vue,ts}',
        './reports/**/*.{vue,ts}',
        './roles/**/*.{vue,ts}',
        './shipping-labels/**/*.{vue,ts}',
        './user-invitation/**/*.{vue,ts}',
        './users/**/*.{vue,ts}',
    ],

    darkMode: 'class',

    important: true,

    theme: {
        extend: {
            containers: {
                '4xs': '8rem',  // 128px
                '3xs': '12rem', // 192px
                '2xs': '16rem', // 256px
                'xs': '20rem',  // 320px
                'sm': '24rem',  // 384px
                'md': '28rem',  // 448px
                'lg': '32rem',  // 512px
                'xl': '36rem',  // 576px
                '2xl': '42rem', // 672px
                '3xl': '48rem', // 768px
                '4xl': '56rem', // 896px
                '5xl': '64rem', // 1024px
                '6xl': '72rem', // 1152px
                '7xl': '80rem'  // 1280px
            },
        },

        colors: { ...colors },

        fontSize: {
            '7xs': '6px',
            '6xs': '7px',
            '5xs': '8px',
            '4xs': '9px',
            '3xs': '10px',
            '2xs': '11px',
            'xs': '12px',
            'sm': '13px',
            'base': '14px',
            'lg': '15px',
            'xl': '16px',
            '2xl': '17px',
            '3xl': '18px',
            '4xl': '19px',
            '5xl': '20px',
            '6xl': '21px',
            '7xl': '22px',
            '8xl': '23px',
            '9xl': '24px',
            '10xl': '25px',
        }
    },

    plugins: [
        require('@tailwindcss/container-queries'),
    ],
}
