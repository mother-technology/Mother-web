import React from "react";
import "./Panel.css";
import { IconContext } from "react-icons";
import { IoAccessibilityOutline } from "react-icons/io5";

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
  const IconName = IoAccessibilityOutline;
  return (
    <div className="flex panel-item">
      <div className="icon-container">
        <IconContext.Provider value={{ className: "icon" }}>
          <IconName />
        </IconContext.Provider>
      </div>
      <div className="flex panel-info">
        <h3>{header}</h3>
        <p className="small">{text}</p>
      </div>
    </div>
  );
};
