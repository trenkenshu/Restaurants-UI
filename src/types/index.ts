export interface IRestaurant
    extends Record<
        string,
        undefined | string | string[] | number | number[] | IReview[] | IBooking[] | { [key: string]: ITranslate }
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
    bookings: IBooking[];
    error?: string;
}
export interface IReview {
    id: number;
    // cafe: IRestaurant;
    authorId: number;
    author: IUser;
    text: string;
    rating: number | string;
    cafeId: number;
    cafe: IRestaurant;
}

export interface ICreateReview {
    clientId: number;
    cafeId: number;
    text: string;
    rating: number | string;
}

// USER //
export interface IUser {
    id: number;
    login: string;
    email: string;
    phone: string;
    password: string;
    favourites: IRestaurant[];
    bookings: IBooking[];
    reviews: IReview[];
    bonusPoints: number;
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
    error?: string;
}

export interface ILoginUser {
    login: string;
    password: string;
}

export interface ICreateBooking {
    clientId: number;
    cafeId: number;
    tableId: number;
    date: Date;
    duration: number;
}

export interface IBooking {
    id: number;
    cafeId: number;
    cafe: IRestaurant;
    tableId: number;
    guestId: number;
    duration: number;
    date: Date;
    createdAt: Date;
    guestsAmount: number;
    guestName: string;
    guestPhone: string;
    status: 'active' | 'deleted' | 'archived';
}

export interface IDelBooking {
    id: number;
}

export interface IUpdateReview {
    id: number;
    text?: string;
    rating?: number | string;
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

export interface IState {
    restaurants: IRestaurant[];
    // currentRestaurant: IRestaurant;
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
