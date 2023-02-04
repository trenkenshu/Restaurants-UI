import React, { FC } from 'react';

interface ButtonFavoriteProps {
    filled?: boolean;
}

const ButtonFavorite: FC<ButtonFavoriteProps> = ({ filled }) => {
    const bg = filled ? 'bg-favoriteFilled' : 'bg-favorite';
    return <button className={`w-full h-full ${bg} bg-cover hover:bg-favoriteFilled`}></button>;
};

export default ButtonFavorite;
