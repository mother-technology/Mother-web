/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

type HeaderProps = {
  className: string;
  withLogo?: boolean;
  header?:string;
};

export const Header: React.FC<HeaderProps> = ({
  className,
  withLogo = false,
  header,
}: HeaderProps) => {
  let name: string = "header  " + className;
  let height: number = window.innerHeight - 87; //remove navbar
  if (height > 700) {
    height = 700;
  }

  return (
    <div className="header-background" style={{height: height}}>
          <div className="header-wrapper">
        <div className={name}>
        <div className="overlay flex" style={{height: height}}>
          {withLogo && (
            <img src="./images/mother-changing-minds-white.png" className="logo" />
          )}
          {header && (
          <h1 className="flex">{header}</h1>
          )}
        </div>
        </div>
        </div>
    </div>
  );
};
