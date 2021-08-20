import React from "react";
import "./Panel.css";

type PanelProps = {
  header: string;
  text: string;
  icon: string;
};

export const Panel: React.FC<PanelProps> = ({
  header,
  text,
  icon,
}: PanelProps) => {
  return (
    <div className="flex process-item">
      <img src={icon} alt="process icon" />
      <div className="flex process-info">
        <h3>{header}</h3>
        <p className="small">{text}</p>
      </div>
    </div>
  );
};
