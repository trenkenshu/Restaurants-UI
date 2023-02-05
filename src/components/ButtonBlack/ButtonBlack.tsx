import React, { FC } from 'react';

interface ButtonBlackProps {
    width: string;
    height: string;
    buttonText: string;
    fontsize?: number | string;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ width, height, fontsize, buttonText }) => {
    return (
        <button
            className={`${width} ${height} ${fontsize} items-center bg-black text-corall hover:bg-smoke-gray hover:text-zinc-800 border border-zinc-800 rounded-full font-semibold`}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
