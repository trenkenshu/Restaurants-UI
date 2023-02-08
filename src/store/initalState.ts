import { IState } from 'types';

const initialState: IState = {
    restaurants: [],
    currentRestaurant: {
        id: 0,
        coordinates: [0, 0],
        city: '',
        name: '',
        phone: '',
        rating: 0,
        averageCheck: 0,
        images: [],
        menuImg: [],
        workTimeStart: 0,
        workTimeEnd: 0,
        translation: '',
        reviews: [],
    },
    user: {
        id: 0,
        isAuthorized: false,
        name: '',
        email: '',
        phone: 0,
        favorites: [],
        bookings: [],
        reviews: [],
    },
    // currentCity: 'Minsk',
    currentCity: {
        en: 'Minsk',
        ru: 'Минск',
    },
    language: 'en',
    theme: 'light',
};

export default initialState;
