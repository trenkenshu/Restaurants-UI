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
        bookings: [],
    },
    user: {
        id: 0,
        login: '',
        email: '',
        phone: '',
        password: '',
        favourites: [],
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
