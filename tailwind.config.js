/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            spacing: {
                21: '5.5rem',
            },
            backgroundImage: {
                rslogo: "url('/src/assets/icons/rs_school_js.svg')",
                eng: "url('/src/assets/icons/eng-r.png')",
                ru: "url('/src/assets/icons/rus-r.png')",
                lightmode: "url('/src/assets/icons/light_mode.svg')",
                darkmode: "url('/src/assets/icons/dark_mode.svg')",
                account: "url('/src/assets/icons/account_profile.svg')",
                login: "url('/src/assets/icons/login.svg')",
                rating: "url('/src/assets/icons/rating-star.svg')",
            },
            flex: {
                100: '1 1 100%',
            },
            colors: {
                'smoke-gray': '#F0F0F0',
                corall: '#ff5f49',
            },
            fontFamily: {
                logo: ['"Cinzel Decorative"'],
            },
            height: {
                '15': '3.75rem',
                '17': '4.375rem',
              },
        },
    },
    plugins: [],
};
