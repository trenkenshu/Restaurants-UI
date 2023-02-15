import { updateUser } from 'api/api';
import React, { FC, useContext, useState } from 'react';
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
        filled
            ? (state.user.favourites = state.user.favourites.filter((rest) => rest.id !== id))
            : state.user.favourites && state.user.favourites.push(restaurant);

        const bodyForUpdateUser = { ...state.user };
        updateUser(bodyForUpdateUser).then((updatedUser) => {
            if (typeof updatedUser.data === 'object') {
                dispatch({
                    type: 'updateUser',
                    payload: updatedUser.data,
                });
            }
        });
    };

    return (
        <button
            className={`w-full h-full ${bg} bg-cover hover:scale-125 transition`}
            onClick={() => updateFavorites(restaurant.id, filled)}
        ></button>
    );
};

export default ButtonFavorite;
