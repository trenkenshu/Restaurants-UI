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
                // eslint-disable-next-line quotes
                rslogo: "url('/src/assets/icons/rs_school_js.svg')",
                // eslint-disable-next-line quotes
                eng: "url('/src/assets/icons/eng-r.png')",
                // eslint-disable-next-line quotes
                ru: "url('/src/assets/icons/rus-r.png')",
                // eslint-disable-next-line quotes
                lightmode: "url('/src/assets/icons/light_mode.svg')",
                // eslint-disable-next-line quotes
                darkmode: "url('/src/assets/icons/dark_mode.svg')",
                // eslint-disable-next-line quotes
                account: "url('/src/assets/icons/account_profile.svg')",
                // eslint-disable-next-line quotes
                login: "url('/src/assets/icons/login.svg')",
                // eslint-disable-next-line quotes
                rating: "url('/src/assets/icons/rating-star.svg')",
                // eslint-disable-next-line quotes
                burgermenu: "url('/src/assets/icons/burger-menu.svg')",
                // eslint-disable-next-line quotes
                closemenu: "url('/src/assets/icons/close_menu.svg')",
                // eslint-disable-next-line quotes
                randomRest: "url('/src/assets/images/home-page/random-restaurant.jpg')",
                // eslint-disable-next-line quotes
                arrowNext: "url('/src/assets/icons/arrow_forward.svg')",
                // eslint-disable-next-line quotes
                arrowBack: "url('/src/assets/icons/arrow_back.svg')",
                // eslint-disable-next-line quotes
                arrowNextWhite: "url('/src/assets/icons/arrow_forward_white.svg')",
                // eslint-disable-next-line quotes
                arrowBackWhite: "url('/src/assets/icons/arrow_back_white.svg')",
                // eslint-disable-next-line quotes
                favorite: "url('/src/assets/icons/favorite.svg')",
                // eslint-disable-next-line quotes
                favoriteFilled: "url('/src/assets/icons/favorite_filled.svg')",
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
                15: '3.75rem',
                17: '4.375rem',
            },
        },
    },
    plugins: [],
};
