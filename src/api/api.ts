import axios, { AxiosResponse } from 'axios';
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

const api = axios.create({
    baseURL: 'https://restaurants-server-2.onrender.com/',
});

export const getRestaurants = async (city: string): Promise<IRestaurant[]> => {
    // : Promise<AxiosResponse<any, any>>
    const response = await api.get<IRestaurant[]>(`/cafe/city/${city}`);
    return response.data;
};

export const getRestaurant = async (id: number): Promise<IRestaurant> => {
    const response = await api.get<IRestaurant>(`/cafe/${id}`);
    return response.data;
};

export const createUser = async (body: IUserReg) => {
    const response = await api.post<IUserReg>('/register', body);
    console.log(response);
    return response;
};

export const updateUser = async (body: IUserEdit) => {
    const response = await api.post('/client/edit', body);
    console.log('userEdit:', response.data);
    return response;
};

export const getUser = async (id: number): Promise<IUser> => {
    const response = await api.get<IUser>(`/client/${id}`);
    return response.data;
};

export const loginUser = async (body: ILoginUser): Promise<IUser> => {
    const response = await api.post<IUser>('/login', body);
    console.log(response.data);
    return response.data;
};

export const createBooking = async (body: ICreateBooking) => {
    const response = await api.post<ICreateBooking>('/bookings', body);
    console.log('booking:', response.data);
    return response.data;
};

export const updateBooking = async (body: IBooking) => {
    const response = await api.patch<IBooking>('/bookings', body);
    console.log('update booking:', response.data);
    return response.data;
};

export const deleteBooking = async (id: number) => {
    const response = await api.get(`/bookings/${id}`);
    console.log('delete booking:');
    return response.data;
};

export const createReview = async (body: ICreateReview) => {
    const response = await api.post<ICreateReview>('/reviews', body);
    console.log('review:', response.data);
    return response.data;
};

export const updateReview = async (body: IUpdateReview) => {
    const response = await api.patch<IUpdateReview>('/reviews', body);
    console.log('update review:', response.data);
    return response.data;
};

export const deleteReview = async (id: number) => {
    const response = await api.delete(`/reviews/${id}`);
    console.log('delete review:', response.data);
    return response.data;
};
