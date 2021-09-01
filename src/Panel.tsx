import React from "react";
import "./Panel.css";
import { IconContext } from "react-icons";
import {IoBookOutline, IoAccessibilityOutline, IoTrendingUp} from "react-icons/io5";

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
  // const IconName = IoAccessibilityOutline;
  return (
    <div className="flex panel-item">
      <div className="icon-container">
        <IconContext.Provider value={{ className: "icon" }}>
          {icon === "IoBookOutline" &&
            <IoBookOutline />
          }
          {icon === "IoAccessibilityOutline" &&
          <IoAccessibilityOutline />
        }
        {icon === "IoTrendingUp" &&
          <IoTrendingUp />
        }
        </IconContext.Provider>
      </div>
      <div className="flex panel-info">
        <h3>{header}</h3>
        <p className="small">{text}</p>
      </div>
    </div>
  );
};
