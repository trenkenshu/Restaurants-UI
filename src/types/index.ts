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
    login: string;
    email: string;
    phone: string;
    favourites: IRestaurant[];
    bookings: IBooking[];
    reviews: IReview[];
    error?: string;
}

export interface IUserReg {
    login: string;
    email: string;
    phone: string;
    password: string;
    error?: string;
}

export interface IUserEdit {
    id: number;
    email?: string;
    phone?: string;
    password?: string;
}

export interface ILoginUser {
    login: string;
    password: string;
}

export interface ICreateBooking {
    clientId: number;
    cafeId: number;
    tabelId: number;
    date: Date;
    duration: number;
}

export interface IBooking {
    id: number;
    tableId: number;
    date: Date;
    duration: number;
}

export interface IDelBooking {
    id: number;
}

export interface ICreateReview {
    clientId: number;
    cafeId: number;
    text: string;
    rating: number;
}

export interface IUpdateReview {
    id: number;
    text?: string;
    rating?: number;
}


export interface ITranslate {
    name: string;
    city: string;
    address: string;
    description: string;
    cuisineType: string[];
}

export type iCoordinate = [number, number];

export type OptionType = {
    value: string;
    label: string;
};

export interface CityType extends Record<string, string> {
    en: string;
    ru: string;
}
// export type CityType = 'Minsk' | 'Kazan' | 'Минск' | 'Казань';

export enum Cities {
    Minsk = 'Минск',
    Kazan = 'Казань',
}
export interface IState {
    restaurants: IRestaurant[];
    currentRestaurant: IRestaurant;
    user: IUser;
    currentCity: CityType;
    language: 'en' | 'ru';
    theme: string;
}

export type ActionType =
    | {
          type: 'getRestaurants';
          payload: IRestaurant[];
      }
    | {
          type: 'getRestaurant';
          payload: IRestaurant;
      }
    | {
          type: 'changeCity';
          payload: CityType;
      }
    | {
          type: 'changeLang';
          payload: 'en' | 'ru';
      }
    | {
          type: 'changeTheme';
          payload: 'light' | 'dark';
      }
    | {
          type: 'updateUser';
          payload: IUser | IUserReg;
      };
