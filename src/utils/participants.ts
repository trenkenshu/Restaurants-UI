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
            ru: 'Руководитель группы, Fullstack-разработчик',
        },
        photo: TrenkenshuPhoto,
        link: 'https://github.com/trenkenshu',
        description: {
            en: 'Managed team work.\nDeveloped the back-end part of the project (server on NodeJS + Express, integration with MongoDB, setting up and populating the database, developing a REST API, adding user registration and authorization) .\nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.)',
            ru: 'Управление работой команды. Разработка back-end части проекта (сервер на NodeJS+Express, интеграция с MongoDB, настройка и наполнение базы данных, разработка REST API, добавление регистрации и авторизации пользователей). Реализация логики получения и отправки данных с помощью написанного API на фронтенде (данные о ресторанах, статьи, пользовательские данные и т.д.), отрисовка контента на основе полученных данных и обработка событий фронтенда (добавление в избранное, бронирование ресторанов , и т. д.)',
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
            ru: 'Фронтенд-разработчик',
        },
        photo: MinkovPhoto,
        link: 'https://github.com/ViktorMinkov',
        description: {
            en: 'Came up with the application concept.\nDeveloped the front-end of the project: made layouts, implemented responsible layout and design for the restaurants searching page with map, restaurant page using React and Tailwind. Handled DOM events using Typescript and programming approach.\nCame up with the location of the elements, the color scheme and the animations.\nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.).',
            ru: 'Разработка концепции приложения.\nРазработка фронтенд части проекта с помощью React и Tailwind: макеты, адаптивная верстка и дизайн страницы поиска ресторанов с картой, страницы ресторана . Обработка DOM-событий с помощью Typescript и программирования.\nРазработка  элементов, цветовой схемы и анимации.\nРеализация логики получения и отправки данных с помощью написанного API на интерфейсе (данные о ресторанах, статьи, пользовательские данные и т. д.), рендеринг контента на основе полученных данных и обработка фронтенд-событий (добавление в избранное, бронирование ресторанов и т. д.).',
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
            ru: 'Фронтенд-разработчик',
        },
        photo: BalakaevaPhoto,
        link: 'https://github.com/RallyZK',
        description: {
            en: 'Developed the front-end of the project: made layouts, implemented responsible design for the  main page, user page using React and Tailwind. Handled DOM events using Typescript and programming approach.\nCame up with the location of the elements, the color scheme and the animations. \nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.).',
            ru: 'Разработка фронтенд части проекта: верстка, реализация адаптивной верстки и дизайна главной страницы, страницы пользователя с помощью React и Tailwind. Обработка событий DOM с помощью машинописного текста и подхода к программированию.\nРазработка расположения элементов, цветовой схемы и анимации. \nРеализация логики получения и отправки данных с помощью написанного API на фронтенде (данные о ресторанах, статьи, пользовательские данные и т.д.), отрисовка контента на основе полученных данных и обработка событий фронтенда (добавление в избранное, рестораны бронирование и др.).',
        },
    },
];

export default participants;
