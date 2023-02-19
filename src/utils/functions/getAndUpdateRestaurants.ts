import { getRestaurants } from 'api/api';
import { Dispatch } from 'react';
import { ActionType, IRestaurant, IState } from 'types';

const getAndUpdateRestaurants = async (state: IState, dispatch: Dispatch<ActionType>) => {
    const restaurants = await getRestaurants(state.currentCity['en']);
    restaurants.forEach((el: IRestaurant) => {
        el.parsedTranslation = JSON.parse(el.translation);
    });
    dispatch({ type: 'getRestaurants', payload: restaurants });
};

export default getAndUpdateRestaurants;
