export interface IRestaurant {
    id: number;
    name: string;
    description: string;
    address: string;
    coordinates: number[];
    phone: string;
    workTime: {
        start: number;
        end: number;
    };
    rating: number;
    averageCheck: number;
    cuisineType: string[];
    reviews: IReview[];
    images: string[];
    menuImg: string;
    tag: TagsType[];
    city: string;
}

export interface IReview {
    id: number;
    author: string;
    text: string;
    rating: number;
}

export type TagsType = 'popular' | 'breakfast' | 'for date' | 'view' | 'fish' | 'sportbar';

// USER //
export interface IUser {
    id: number;
    isAuthorized: boolean;
    name: string;
    email: string;
    phone: number;
    favorites: number[];
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
