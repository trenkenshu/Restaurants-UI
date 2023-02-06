import TrenkenshuPhoto from '../assets/images/about-us/Oleg_Trenkenshu.jpg';
import MinkovPhoto from '../assets/images/about-us/Viktor_Minkov.jpg';
import BalakaevaPhoto from '../assets/images/about-us/Railia_Balakaeva.jpg';

const participants = [
    {
        id: 0,
        name: 'Oleg Trenkenshu',
        title: 'Team lead, Fullstack developer',
        photo: TrenkenshuPhoto,
        link: 'https://github.com/trenkenshu',
        description:
            'Managed team work.\nDeveloped the back-end part of the project (server on NodeJS + Express, integration with MongoDB, setting up and populating the database, developing a REST API, adding user registration and authorization) .\nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.)',
    },
    {
        id: 1,
        name: 'Viktor Minkov',
        title: 'Frontend developer',
        photo: MinkovPhoto,
        link: 'https://github.com/ViktorMinkov',
        description:
            'Came up with the application concept.\nDeveloped the front-end of the project: made layouts, implemented responsible layout and design for the restaurants searching page with map, restaurant page using React and Tailwind. Handled DOM events using Typescript and programming approach.\nCame up with the location of the elements, the color scheme and the animations.\nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.).',
    },
    {
        id: 2,
        name: 'Railia Balakaeva',
        title: 'Frontend developer',
        photo: BalakaevaPhoto,
        link: 'https://github.com/RallyZK',
        description:
            'Developed the front-end of the project: made layouts, implemented responsible design for the  main page, user page using React and Tailwind. Handled DOM events using Typescript and programming approach.\nCame up with the location of the elements, the color scheme and the animations. \nImplemented the logic of receiving and sending data using the written API on the front-end (restaurants data, articles, user data, etc.), rendering content based on the received data and processing front-end events (adding to favorites, restaurants reservation, etc.).',
    },
];

export default participants;
