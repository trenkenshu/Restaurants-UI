import React, { FC } from 'react';

interface ButtonBlackProps {
    width: string;
    height: string;
    buttonText: string;
    fontsize?: number | string;
    onClick?: () => void;
    type?: string;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ width, height, fontsize, buttonText, onClick }) => {
    return (
        <button
            className={`${width} ${height} ${fontsize} items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold transition`}
            onClick={onClick}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
