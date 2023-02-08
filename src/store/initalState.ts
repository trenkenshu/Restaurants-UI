import { IState } from 'types';

const initialState: IState = {
    restaurants: [],
    user: {
        id: 0,
        login: '',
        email: '',
        phone: '',
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
