import React from "react";
import "./PanelPerson.css";

type PanelProps = {
  header: string;
  text: string;
  img: string;
  linkHref: string;
  linkName?: string;
};

export const PanelPerson: React.FC<PanelProps> = ({
  header,
  text,
  img,
  linkHref,
  linkName = "LinkedIn",
}: PanelProps) => {
  return (
    <div className="flex person-item">
      <img src={img} alt="process icon" />
      <div className="flex person-info">
        <h3>{header}</h3>
        <p className="small">{text}</p>
        <a href={linkHref}>{linkName}.</a>
      </div>
    </div>
  );
};
