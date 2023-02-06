import { IState } from 'types';

// interface IState {
//     restaurants: IRestaurant[];
//     user: IUser;
//     currentCity: string;
//     cities: string[];
//     language: string;
//     theme: string;
// }

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
    },
    currentCity: 'Minsk',
    cities: ['Minsk', 'Kazan'],
    language: '',
    theme: '',
};

export default initialState;
