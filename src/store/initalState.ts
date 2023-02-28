import { IState } from 'types';

const initialState: IState = {
    restaurants: [],
    user: {
        id: 0,
        login: '',
        email: '',
        phone: '',
        password: '',
        favourites: [],
        bookings: [],
        reviews: [],
        bonusPoints: 0,
    },
    currentCity: {
        en: 'Minsk',
        ru: 'Минск',
    },
    language: 'en',
    theme: 'light',
};

export default initialState;
