import { IState } from 'types';

const initialState: IState = {
    restaurants: [],
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
