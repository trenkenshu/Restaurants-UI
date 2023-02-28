import axios from 'axios';
import {
    IBooking,
    ICreateBooking,
    ICreateReview,
    ILoginUser,
    IRestaurant,
    IUpdateReview,
    IUser,
    IUserEdit,
    IUserReg,
} from 'types';
import { baseURL } from 'utils/constants';

const api = axios.create({
    baseURL: baseURL,
});

export const getRestaurants = async (city: string): Promise<IRestaurant[]> => {
    const response = await api.get<IRestaurant[]>(`/cafe/city/${city}`);
    return response.data;
};

export const getRestaurant = async (id: number): Promise<IRestaurant> => {
    const response = await api.get<IRestaurant>(`/cafe/${id}`);
    return response.data;
};

export const createUser = async (body: IUserReg) => {
    const response = await api.post<IUserReg>('/register', body);
    return response;
};
export const updateUser = async (body: IUserEdit) => {
    const response = await api.patch('/client/edit', body);
    return response;
};

export const getUser = async (id: number): Promise<IUser> => {
    const response = await api.get<IUser>(`/client/${id}`);
    return response.data;
};

export const loginUser = async (body: ILoginUser): Promise<IUser> => {
    const response = await api.post<IUser>('/login', body);
    return response.data;
};

export const createBooking = async (body: ICreateBooking) => {
    const response = await api.post<ICreateBooking>('/bookings', body);
    return response.data;
};

export const updateBooking = async (body: IBooking) => {
    const response = await api.patch<IBooking>('/bookings', body);
    return response.data;
};

export const deleteBooking = async (id: number, userId: number) => {
    const response = await api.delete(`/bookings/${userId}/${id}`);
    return response.data;
};

export const createReview = async (body: ICreateReview) => {
    const response = await api.post<IRestaurant>('/reviews', body);
    return response.data;
};

export const updateReview = async (body: IUpdateReview) => {
    const response = await api.patch<IUpdateReview>('/reviews', body);
    return response.data;
};

export const deleteReview = async (id: number, userId: number) => {
    const response = await api.delete(`/reviews/${userId}/${id}`);
    return response.data;
};

export const addRemoveFavourites = async (method: 'post' | 'delete', clientId: number, cafeId: number) => {
    if (method === 'post') {
        const response = await api.post<IUser>(`/favourites/${clientId}/${cafeId}`);
        return response;
    }
    if (method === 'delete') {
        const response = await api.delete<IUser>(`/favourites/${clientId}/${cafeId}`);
        return response;
    }
};
