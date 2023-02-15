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
            className={`${width} ${height} ${fontsize} items-center bg-black text-corall hover:bg-transparent hover:text-black border border-black rounded-full font-semibold transition`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {buttonText}
        </button>
    );
};

export default ButtonBlack;
