/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";
import Menu from "./Menu";

type HeaderProps = {
    className: string;
    header?: string;
    logo?: string;
};

export const Header: React.FC<HeaderProps> = ({
    className,
    header,
    logo,
}: HeaderProps) => {
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
                }}
            >
                <Menu />

                <div className="headers flex">
                    {logo && 
                        <>
                            <img className="flex logo" src={logo} />
                            <div className="header-separator" />
                        </>
                    }
                    <h1 className="flex">{header}</h1>
                </div>
            </div>
        </div>
    );
};
