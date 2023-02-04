import React, { FC } from 'react';

interface ButtonFavoriteProps {
    size: number | string;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ size }) => {
    return (
        <button
            className={`w-${size} h-${size} bg-favorite bg-cover absolute right-2 top-2 hover:bg-favoriteFilled`}
        ></button>
    );
};

export default ButtonFavorite;
