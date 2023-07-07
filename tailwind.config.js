/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            'blblbl': ['"Comic Sans MS"', '"Comic Sans"'],
        },
        extend: {
            colors: {
                'primary': '#D72642',
                'primary-hover': '#BB132E',
                'additional': '#FBECEE',
                'black': '#141515',
                'grey-1': '#646363',
                'grey-2': '#AEAEAE',
                'grey-3': '#D0D0D0',
                'grey-4': '#E4E4E4',
                'white': '#FFFFFF',
            },
        },
        screens: {
            'main': '1248px',
        },
        container: {
            padding: {
                DEFAULT: '1.5rem',
                'main': '1.5rem',
            },
        },
    },
    plugins: [],
}
