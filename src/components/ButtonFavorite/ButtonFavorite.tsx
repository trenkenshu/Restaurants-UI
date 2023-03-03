import setParsedTranslation from 'utils/functions/setParsedTranslation';
import { addRemoveFavourites } from 'api/api';
import React, { FC, useContext, useState } from 'react';
import { AppContext } from 'store/store';
import { IRestaurant } from 'types';

interface ButtonFavoriteProps {
    filled: boolean;
    restaurant: IRestaurant;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ filled, restaurant }) => {
    const { state, dispatch } = useContext(AppContext);
    const [readyToRequest, setReadyToRequest] = useState(true);
    let bg = filled ? 'bg-favoriteFilled' : 'bg-favorite';
    bg = readyToRequest ? bg : bg + ' cursor-wait';

    const updateFavorites = async (id: number, filled: boolean) => {
        if (state.user.id === 0) return;
        setReadyToRequest(false);
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
            setReadyToRequest(true);
        }
    };

    return (
        <button
            className={`w-full h-full ${bg} bg-cover hover:scale-110 transition duration-300`}
            onClick={() => readyToRequest && updateFavorites(restaurant.id, filled)}
        ></button>
    );
};

export default ButtonFavorite;
