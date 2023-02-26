import React, { FC } from 'react';

interface ButtonBlackProps {
    width: string;
    height: string;
    buttonText: string;
    fontsize?: number | string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset' | undefined;
    disabled?: boolean;
}

const ButtonBlack: FC<ButtonBlackProps> = ({ width, height, fontsize, buttonText, onClick, type, disabled }) => {
    return (
        <button
            className={`${width} ${height} ${fontsize} items-center bg-black text-corall border-2 border-black rounded-full font-semibold transition duration-300
            hover:bg-transparent hover:text-black dark:hover:border-smoke-gray dark:hover:text-smoke-gray
            disabled:bg-zinc-800 disabled:text-black disabled:border-black hover:disabled:bg-zinc-800 hover:disabled:text-black hover:disabled:border-black dark:hover:disabled:text-black dark:hover:disabled:border-black`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
