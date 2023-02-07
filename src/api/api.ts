import axios from 'axios';
import { IRestaurant, IUser } from 'types';

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

export const getUser = async (id: number): Promise<IUser> => {
    const response = await api.get<IUser>(`/client/${id}`);
    return response.data;
};
