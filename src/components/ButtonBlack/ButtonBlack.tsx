import React, { FC } from 'react';

interface ButtonBlackProps {
    width: number | string;
    height: number | string;
    fontsize: number | string;
    buttonText: string;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ width, height, fontsize, buttonText }) => {
    return (
        <button
            className={`w-${width} h-${height} text-${fontsize} mx-auto items-center bg-black text-corall hover:bg-smoke-gray hover:text-zinc-800 border border-zinc-800 rounded-full font-semibold`}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
