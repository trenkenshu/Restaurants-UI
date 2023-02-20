import { IBooking, IRestaurant, IReview, IStepper, IUser } from 'types';

export const baseURL = 'https://restaurants-server-3.onrender.com';

export const emailRegexp =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const phoneRegexp = /^\+\d{9,}/g;
// export const nameRegexp = /^([A-Z]{1,}[a-z]{0,}|[А-Я]{1,}[а-я]{0,})(\s[A-Z]{0,}[a-z]{0,}|[А-Я]{1,}[а-я]{0,})*[\s]*$/g;
export const nameRegexp = /^[A-ZА-Я][a-zA-ZА-Яа-я\s]*$/;

export const emptyRestaurant: IRestaurant = {
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
};

export const emptyUser: IUser = {
    id: 0,
    login: '',
    email: '',
    phone: '',
    password: '',
    favourites: [],
    bookings: [],
    reviews: [],
    bonusPoints: 0,
};

export const emptyReview: IReview = {
    id: 0,
    authorId: 0,
    author: emptyUser,
    text: '',
    rating: 0,
    cafeId: 0,
    cafe: emptyRestaurant,
};

export const emptyBooking: IBooking = {
    id: 0,
    cafeId: 0,
    cafe: emptyRestaurant,
    tableId: 0,
    guestId: 0,
    duration: 0,
    date: new Date(),
    createdAt: new Date(),
    guestAmount: 0,
    guestName: '',
    guestPhone: '',
    status: 'active',
};

export const emptyStepper: IStepper = {
    stepsFinished: [false, false, false, false, false],
    reservedTables: [],
    // selectedTable: '',
    stepOne: new Date(),
    stepTwo: '',
    stepThree: { guestNumber: 1, tableId: '' },
    stepFour: { name: '', phone: '', comment: '' },
    stepFive: emptyBooking,
};
