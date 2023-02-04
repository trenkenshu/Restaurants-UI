import React, { FC } from 'react';

interface ButtonBlackProps {
    buttonText: string;
    fontsize?: number | string;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ fontsize, buttonText }) => {
    return (
        <button
            className={`w-full h-full text-${fontsize} mx-auto items-center bg-black text-corall hover:bg-smoke-gray hover:text-zinc-800 border border-zinc-800 rounded-full font-semibold`}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
