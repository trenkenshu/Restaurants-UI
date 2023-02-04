import React, { FC } from 'react';

interface ButtonFavoriteProps {
    filled?: boolean;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ filled }) => {
    const bg = filled ? 'favoriteFilled' : 'favorite';
    return (
        <button
            className={`w-8 h-8 bg-${bg}
            bg-cover absolute right-2 top-2 hover:bg-favoriteFilled`}
        ></button>
    );
};

export default ButtonFavorite;
