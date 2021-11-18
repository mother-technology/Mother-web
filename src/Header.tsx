/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

type HeaderProps = {
  className: string;
  header?:string;
  subHeader?:string;
};

export const Header: React.FC<HeaderProps> = ({
  className,
  header,
  subHeader,
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
          <div className="headers flex">
            {header && (
                <h1 className="flex">{header}</h1>
            )}
            {subHeader && (
              <>
                <div className="separator" />
                <h2 className="flex">{subHeader}</h2>
              </>
            )}
            </div>
        </div>
      </div>
    </div>
  </div>
  );
};
