"use client";

import React, { ReactNode } from "react";

interface IProps {
    text: ReactNode;
    disabled: boolean;
    handleClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
};


export const Button = ({text, disabled, handleClick}: IProps): JSX.Element => {
    return (
        <div className="mt-8">
            <button
                style={disabled ? {background: 'grey'} : {}}
                disabled={disabled}
                onClick={handleClick}
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                {text}
            </button>
        </div>
    )
}