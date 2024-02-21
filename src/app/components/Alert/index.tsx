import React, { ReactNode } from "react";

interface IProps {
    children: ReactNode;
    type: 'info' | 'success' | 'error'
};


export const Alert = ({children, type}: IProps): JSX.Element => {
    const mapTypeToColor = {
        info: 'blue',
        success: 'green',
        error: 'red'
    }
    return (
        <div
            style={{color: mapTypeToColor[type]}}
            className={`p-4 mb-4 text-sm text-${mapTypeToColor[type]}-800 rounded-lg bg-${mapTypeToColor[type]}-50 dark:bg-gray-800 dark:text-${mapTypeToColor[type]}-400`}
            role="alert"
        >
            <span className="font-medium">Info alert!</span> {children}
        </div>
    )
}