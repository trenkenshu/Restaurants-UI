import { IState } from 'types';

const checkFavorites = (id: number, state: IState) => {
    let isInFavourites = false;
    state.user.favourites &&
        state.user.favourites.forEach((rest) => {
            if (rest.id === id) isInFavourites = true;
        });
    return isInFavourites;
};

export default checkFavorites;
