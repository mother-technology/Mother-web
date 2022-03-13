/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

type HeaderProps = {
    className: string;
    header?: string;
    subHeader?: string;
};

export const Header: React.FC<HeaderProps> = ({
    className,
    header,
    subHeader,
}: HeaderProps) => {
    let maxHeight: number = 998;
    let height: number = window.innerHeight;
    if (height > maxHeight) {
        height = maxHeight;
    }

    return (
        <div
            className={`header flex ${className}`}
            style={{ height: height, backgroundSize: `2000px ${height}px` }}
        >
            <div className="headers flex">
                {header && <h1 className="flex">{header}</h1>}
                {subHeader && (
                    <>
                        <div className="header-separator" />
                        <h2 className="flex">{subHeader}</h2>
                    </>
                )}
            </div>
        </div>
    );
};
