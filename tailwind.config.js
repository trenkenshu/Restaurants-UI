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
                loginWhite: "url('/src/assets/icons/login_white.svg')",
                rating: "url('/src/assets/icons/rating-star.svg')",
                burgermenu: "url('/src/assets/icons/burger-menu.svg')",
                burgermenuWhite: "url('/src/assets/icons/burger-menu_white.svg')",
                closemenu: "url('/src/assets/icons/close_menu.svg')",
                closemenuWhite: "url('/src/assets/icons/close_menu_white.svg')",
                randomRest: "url('/src/assets/images/home-page/random-restaurant.jpg')",
                arrowNext: "url('/src/assets/icons/arrow_forward.svg')",
                arrowBack: "url('/src/assets/icons/arrow_back.svg')",
                arrowNextWhite: "url('/src/assets/icons/arrow_forward_white.svg')",
                arrowBackWhite: "url('/src/assets/icons/arrow_back_white.svg')",
                favorite: "url('/src/assets/icons/favorite.svg')",
                favoriteFilled: "url('/src/assets/icons/favorite_filled.svg')",
                userIcon: "url('/src/assets/icons/account_profile.svg')",
                userIconWhite: "url('/src/assets/icons/account_profile_white.svg')",
                userIconCorall: "url('/src/assets/icons/account_profile_corall.svg')",
                logout: "url('/src/assets/icons/logout.svg')",
                logoutWhite: "url('/src/assets/icons/logout_white.svg')",
                edit: "url('/src/assets/icons/edit.svg')",
                editWhite: "url('/src/assets/icons/edit_white.svg')",
                delete: "url('/src/assets/icons/delete.svg')",
                deleteWhite: "url('/src/assets/icons/delete_white.svg')",
                location: "url('/src/assets/icons/location-icon.svg')",
                review: "url('/src/assets/icons/review-icon.png')",
                reviewWhite: "url('/src/assets/icons/review-icon_white.png')",
                medalBronze: "url('/src/assets/icons/medal_bronze.svg')",
                medalSilver: "url('/src/assets/icons/medal_silver.svg')",
                medalGold: "url('/src/assets/icons/medal_gold.svg')",
                booking: "url('/src/assets/icons/booking.svg')",
                bookingWhite: "url('/src/assets/icons/booking_white.svg)",
                sets: "url('/src/assets/icons/sets.svg')",
                setsWhite: "url('/src/assets/icons/sets_white.svg')",
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
