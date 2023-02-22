import TrenkenshuPhoto from '../assets/images/about-us/Oleg_Trenkenshu.jpg';
import MinkovPhoto from '../assets/images/about-us/Viktor_Minkov.jpg';
import BalakaevaPhoto from '../assets/images/about-us/Railia_Balakaeva.jpg';

const participants = [
    {
        id: 0,
        name: {
            en: 'Oleg Trenkenshu',
            ru: 'Олег Тренкеншу',
        },
        title: {
            en: 'Team lead, Fullstack developer',
            ru: 'Тимлид, Fullstack разработчик',
        },
        photo: TrenkenshuPhoto,
        link: 'https://github.com/trenkenshu',
        description: {
            en: 'Managed team work.\nDeveloped the back-end part of the project (server on NodeJS + Express, integration with PostgreSQL using Prisma.js adapter, setting up and populating the database, developing a REST API, adding user registration and authorization, deploying backend script to dedicated server).\nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants, bookings, reviews and user data). Developed the front-end of the project.\nChecked and helped all team members in writing code.',
            ru: 'Разработка back-end части проекта (сервер на NodeJS+Express, интеграция с PostgreSQL через адаптер Prisma.js, настройка и наполнение базы данных, разработка REST API, добавление регистрации и авторизации пользователей, деплой backend-скрипта на удаленном сервере).\nРеализация логики получения и отправки данных с помощью API на фронтенде (данные о ресторанах, бронированиях, отзывах, пользователях). Разработка фронтенд части проекта.\nПроверка и помощь всем членам команды в написании кода',
        },
    },
    {
        id: 1,
        name: {
            en: 'Viktor Minkov',
            ru: 'Виктор Миньков',
        },
        title: {
            en: 'Frontend developer',
            ru: 'Frontend разработчик',
        },
        photo: MinkovPhoto,
        link: 'https://github.com/ViktorMinkov',
        description: {
            en: 'Came up with the application concept.\nDeveloped the front-end of the project: layouts, implemented responsible layout and design for the restaurants searching page with map, restaurants pages, burger menu. Implemented routing, reducer, AppContext,  language and theme change using React and Tailwind. Came up with the location of the elements, the color scheme and the animations.\nHandled DOM events using Typescript and programming approach. Implemented the logic of receiving and sending data using the written API on the front-end with Axios (restaurants, bookings, reviews and user data), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation).',
            ru: 'Разработка концепции приложения.\nРазработка фронтенд части проекта: макет, адаптивная верстка и дизайн страниц поиска ресторанов с картой, страниц ресторанов, бургер-меню. Реализация роутинга, редьюсера, AppContext, смены языка и темы с использованием React и Tailwind. Разработка дизайна и компоновка элементов, цветовой схемы и анимации.\nОбработка событий DOM с помощью Typescript. Реализация логики получения и отправки данных с помощью API на фронтенде с Axios (данные о ресторанах, бронированиях, отзывах и пользователях), рендера контента на основе полученных данных и обработка фронтенд-событий (добавление в избранное, бронирование ресторанов ).',
        },
    },
    {
        id: 2,
        name: {
            en: 'Railia Balakaeva',
            ru: 'Раиля Балакаева',
        },
        title: {
            en: 'Frontend developer',
            ru: 'Frontend разработчик',
        },
        photo: BalakaevaPhoto,
        link: 'https://github.com/RallyZK',
        description: {
            en: 'Developed the front-end of the project: made layouts, implemented responsible design for the main page, user page and registration using React and Tailwind. Handled DOM events using Typescript and programming approach. Searched for information for a database.\nCame up with the location of the elements, the color scheme and the animations. Implemented the logic of receiving and sending data using the written API on the front-end (reviews data, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, leaving reviews, changing user data).',
            ru: 'Разработка фронтенд части проекта: макет, адаптивная верстка и дизайн главной страницы, страницы пользователя и регистрации с помощью React и Tailwind. Обработка событий DOM с помощью Typescript. Поиск информации для базы данных.\n Разработка дизайна и компоновка расположения элементов, цветовой схемы и анимации. Реализация логики получения и отправки данных с помощью API на фронтенде (данные об отзывах, персональная информация пользователя), рендера контента на основе полученных данных и обработка событий фронтенда (добавление в избранное, добавление отзывов, изменение данныех пользователя).',
        },
    },
];

export default participants;
