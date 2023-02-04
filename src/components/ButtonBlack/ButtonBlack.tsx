import React, { FC } from 'react';

interface ButtonBlackProps {
    width: number | string;
    height: number | string;
    buttonText: string;
    fontsize?: number | string;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ width, height, fontsize, buttonText }) => {
    const w = `w-${width}`;
    const h = `h-${height}`;
    return (
        <button
            className={`${w} ${h} text-${fontsize} items-center bg-black text-corall hover:bg-smoke-gray hover:text-zinc-800 border border-zinc-800 rounded-full font-semibold`}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
