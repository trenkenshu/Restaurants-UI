import { addRemoveFavourites, updateUser } from 'api/api';
import React, { FC, useContext } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant, IUser } from 'types';
import setParsedTranslation from 'utils/functions/setParsedTranslation';

interface ButtonFavoriteProps {
    filled: boolean;
    restaurant: IRestaurant;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ filled, restaurant }) => {
    const { state, dispatch } = useContext(AppContext);
    const bg = filled ? 'bg-favoriteFilled' : 'bg-favorite';

    const updateFavorites = async (id: number, filled: boolean) => {
        if (state.user.id === 0) return;
        // filled
        //     ? (state.user.favourites = state.user.favourites.filter((rest) => rest.id !== id))
        //     : state.user.favourites && state.user.favourites.push(restaurant);
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

    // const bodyForUpdateUser = { ...state.user };
    // updateUser(bodyForUpdateUser).then((updatedUser) => {
    //     if (typeof updatedUser.data === 'object') {
    //         dispatch({
    //             type: 'updateUser',
    //             payload: updatedUser.data,
    //         });
    //     }
    // });
    // };

    return (
        <button
            className={`w-full h-full ${bg} bg-cover hover:scale-110 transition duration-300`}
            onClick={() => updateFavorites(restaurant.id, filled)}
        ></button>
    );
};

export default ButtonFavorite;
