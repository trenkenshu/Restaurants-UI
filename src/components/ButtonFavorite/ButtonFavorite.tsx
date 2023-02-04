import React, { FC } from 'react';

interface ButtonFavoriteProps {
    size: number | string;
    filled?: boolean;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ size, filled }) => {
    const bg = filled ? 'favoriteFilled' : 'favorite';
    return (
        <button
            className={`w-${size} h-${size} bg-${bg}
            bg-cover absolute right-2 top-2 hover:bg-favoriteFilled`}
        ></button>
    );
};

export default ButtonFavorite;
