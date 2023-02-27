import setParsedTranslation from 'utils/functions/setParsedTranslation';
import { addRemoveFavourites } from 'api/api';
import React, { FC, useContext } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';

interface ButtonFavoriteProps {
    filled: boolean;
    restaurant: IRestaurant;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ filled, restaurant }) => {
    const { state, dispatch } = useContext(AppContext);
    const bg = filled ? 'bg-favoriteFilled' : 'bg-favorite';

    const updateFavorites = async (id: number, filled: boolean) => {
        if (state.user.id === 0) return;
        let updatedUser;
        filled
            ? (updatedUser = await addRemoveFavourites('delete', state.user.id, restaurant.id))
            : (updatedUser = await addRemoveFavourites('post', state.user.id, restaurant.id));

        if (updatedUser) {
            setParsedTranslation(updatedUser.data);
            dispatch({
                type: 'updateUser',
                payload: updatedUser.data,
            });
        }
    };

    return (
        <button
            className={`w-full h-full ${bg} bg-cover hover:scale-110 transition duration-300`}
            onClick={() => updateFavorites(restaurant.id, filled)}
        ></button>
    );
};

export default ButtonFavorite;
