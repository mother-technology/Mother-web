/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import Menu from "./Menu";

type HeaderProps = {
    className: string;
    header?: string;
    subHeader?: string;
    logo?: string;
};

export const Header: React.FC<HeaderProps> = ({
    className,
    header,
    subHeader,
    logo,
}: HeaderProps) => {
    // let maxHeight: number = 1395;
    let maxWidth: number = 2000;
    let width: number = window.innerWidth;
    let percentageShowing: number = 0.85;
    let height: number = window.innerHeight;

    return (
        <div className="outer-header">
            <div
                className={`header flex ${className}`}
                style={{
                    height: height * percentageShowing,
                    width: width > maxWidth ? maxWidth : width,
                    // backgroundSize: `${
                    //     width > maxWidth ? maxWidth + "px" : "auto"
                    // } ${
                    //     height > maxHeight ? maxHeight : height * percentageShowing
                    // }px`,
                }}
            >
                <Menu />

                <div className="headers flex">
                    {header && <h1 className="flex">{header}</h1>}
                    {logo && <img className="flex logo" src={logo} />}
                    {subHeader && (
                        <>
                            <div className="header-separator" />
                            <h2 className="flex">{subHeader}</h2>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
