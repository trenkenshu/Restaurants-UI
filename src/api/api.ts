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

export const createUser = async (body: IUserReg) => {
    const response = await api.post('/register', body);
    console.log(response);
    return response;
};

// export const createUser = async (body: IUserReg) => {
//     const response = await fetch('https://restaurants-server-2.onrender.com/register', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body),
//     });
//     const res = await response.json();
//     console.log(res);
//     return res;
// };

export interface IUserReg {
    login: string;
    email: string;
    phone: string;
    password: string;
}

export const getUser = async (id: number): Promise<IUser> => {
    const response = await api.get<IUser>(`/client/${id}`);
    return response.data;
};
