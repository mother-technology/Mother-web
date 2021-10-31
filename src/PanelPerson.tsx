import React from "react";
import "./PanelPerson.css";

type PanelProps = {
  header: string;
  img: string;
  linkHref: string;
  linkName?: string;
  children: JSX.Element;
};

export const PanelPerson: React.FC<PanelProps> = ({
  header,
  img,
  linkHref,
  linkName = "LinkedIn",
  children,
}: PanelProps) => {
  return (
    <div className="flex person-item">
      <img src={img} alt="process icon" />
      <div className="flex person-info">
        <h3>{header}</h3>
        {children}
        <a href={linkHref}>{linkName}.</a>
      </div>
    </div>
  );
};
