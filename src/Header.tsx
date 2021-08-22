/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

type HeaderProps = {
  className: string;
  withLogo?: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  className,
  withLogo = false,
}: HeaderProps) => {
  let name: string = "header " + className;
  return (
    <div className={name}>
      {withLogo && (
        <img src="./images/mother-changing-minds-black.png" className="logo" />
      )}
    </div>
  );
};
