import axios from 'axios';
const api = axios.create({
    baseURL: 'https://restaurants-server-2.onrender.com/',
});

export const getRestaurants = async (city: string) => {
    // : Promise<AxiosResponse<any, any>>
    const response = await api.get(`/cafe/city/${city}`);
    return response;
};

export const getRestaurant = async (id: number) => {
    const response = await api.get(`/cafe/${id}`);
    return response;
};
