import React from "react";
import "./Panel.css";

type PanelProps = {
  header: string;
  img?: string;
  children: JSX.Element;
};

export const Panel: React.FC<PanelProps> = ({
  header,
  img,
  children,
}: PanelProps) => {

const hashId = header.replace(/\s+/g, '-').toLowerCase();

  return (
    <div className="flex panel-item">
      {img &&
        <img src={img} alt="how to icons" />
      }
      <div className="flex panel-info">
        <h2 id={hashId}>{header}</h2>
        {children}
      </div>
    </div>
  );
};
