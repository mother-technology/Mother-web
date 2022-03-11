/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./PanelTextImageDL.css";

type PanelProps = {
  header: string;
  img: string;
  buttonText?: string;
  buttonLink?: string;
  children: JSX.Element;
};

export const PanelTextImageDL: React.FC<PanelProps> = ({
  header,
  img,
  buttonText,
  buttonLink,
  children,
}: PanelProps) => {
  return (
    <div className="panel-sell-item yellow">
      <div className="flex panel-info">
        <h2>{header}</h2>
        {children}
      </div>
      {img && <img src={img} />}
      {buttonText && (
        <a className="buttonLink" href={buttonLink}>
          {buttonText}
        </a>
      )}
    </div>
  );
};
