// export interface IRestaurant {
//     id: number;
//     name: string;
//     description: string;
//     address: string;
//     coordinates: iCoordinate;
//     phone: string;
//     workTimeStart: number;
//     workTimeEnd: number;
//     rating: number;
//     averageCheck: number;
//     cuisineType: string[];
//     reviews: IReview[];
//     images: string[];
//     menuImg: string;
//     city: string;
//     translation: {
//         en: iTranslate;
//         ru: iTranslate;
//     };
// }

export interface IRestaurant
    extends Record<
        string,
        undefined | string | string[] | number | number[] | IReview[] | { [key: string]: ITranslate }
    > {
    id: number;
    coordinates: iCoordinate;
    city: string;
    name: string;
    phone: string;
    rating: number;
    averageCheck: number;
    images: string[];
    menuImg: string[];
    workTimeStart: number;
    workTimeEnd: number;
    translation: string;
    parsedTranslation?: {
        [key: string]: ITranslate;
    };
    reviews: IReview[];
}
export interface IReview {
    id: number;
    restaurant: IRestaurant;
    author: string;
    text: string;
    rating: number;
}

// export type TagsType = 'popular' | 'breakfast' | 'for date' | 'view' | 'fish' | 'sportbar';

// USER //
export interface IUser {
    id: number;
    isAuthorized: boolean;
    name: string;
    email: string;
    phone: number;
    favorites: IRestaurant[];
    bookings: IBooking[];
}

export interface IBooking {
    id: number;
    restaurantId: number;
    tableId: number;
    guestId: number;
    date: Date;
    bookingDuration: number;
}

export interface ITranslate {
    name: string;
    city: string;
    address: string;
    description: string;
    cuisineType: string[];
}

export type iCoordinate = [number, number];

export interface IState {
    restaurants: IRestaurant[];
    user: IUser;
    currentCity: string;
    cities: string[];
    language: string;
    theme: string;
}

export type ActionType = {
    type: string;
    payload?: IRestaurant[];
};
