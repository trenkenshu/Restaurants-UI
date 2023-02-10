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
                loginWhite: "url('/src/assets/icons/login_white.svg')",
                // eslint-disable-next-line quotes
                rating: "url('/src/assets/icons/rating-star.svg')",
                // eslint-disable-next-line quotes
                burgermenu: "url('/src/assets/icons/burger-menu.svg')",
                // eslint-disable-next-line quotes
                burgermenuWhite: "url('/src/assets/icons/burger-menu_white.svg')",
                // eslint-disable-next-line quotes
                closemenu: "url('/src/assets/icons/close_menu.svg')",
                // eslint-disable-next-line quotes
                closemenuWhite: "url('/src/assets/icons/close_menu_white.svg')",
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
                // eslint-disable-next-line quotes
                userIcon: "url('/src/assets/icons/account_profile.svg')",
                // eslint-disable-next-line quotes
                userIconWhite: "url('/src/assets/icons/account_profile_white.svg')",
                // eslint-disable-next-line quotes
                userIconCorall: "url('/src/assets/icons/account_profile_corall.svg')",
                // eslint-disable-next-line quotes
                logout: "url('/src/assets/icons/logout.svg')",
                // eslint-disable-next-line quotes
                logoutWhite: "url('/src/assets/icons/logout_white.svg')",
                // eslint-disable-next-line quotes
                edit: "url('/src/assets/icons/edit.svg')",
                // eslint-disable-next-line quotes
                editWhite: "url('/src/assets/icons/edit_white.svg')",
                // eslint-disable-next-line quotes
                delete: "url('/src/assets/icons/delete.svg')",
                // eslint-disable-next-line quotes
                deleteWhite: "url('/src/assets/icons/delete_white.svg')",
                // eslint-disable-next-line quotes
                location: "url('/src/assets/icons/location-icon.svg')",
                // eslint-disable-next-line quotes
                review: "url('/src/assets/icons/review-icon.png')",
                // eslint-disable-next-line quotes
                medalBronze: "url('/src/assets/icons/medal_bronze.svg')",
                // eslint-disable-next-line quotes
                medalSilver: "url('/src/assets/icons/medal_silver.svg')",
                // eslint-disable-next-line quotes
                medalGold: "url('/src/assets/icons/medal_gold.svg')",
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
                136: '34rem',
            },
            zIndex: {
                1001: '1001',
            },
        },
    },
    plugins: [
        require('tailwind-scrollbar'),
    ],
    variants: {
        scrollbar: ['dark']
    }
};
