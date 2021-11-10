import React from "react";
import "./Panel.css";
import { IconContext } from "react-icons";
import {IoBookOutline, IoAccessibilityOutline, IoEye} from "react-icons/io5";

type PanelProps = {
  header: string;
  icon: string;
  children: JSX.Element;
};

export const Panel: React.FC<PanelProps> = ({
  header,
  icon,
  children,
}: PanelProps) => {
  // const IconName = IoAccessibilityOutline;
  return (
    <div className="flex panel-item">
      <div className="flex icon-container">
        <IconContext.Provider value={{ className: "icon" }}>
          {icon === "IoBookOutline" &&
            <IoBookOutline />
          }
          {icon === "IoAccessibilityOutline" &&
          <IoAccessibilityOutline />
        }
        {icon === "IoEye" &&
          <IoEye />
        }
        </IconContext.Provider>
      </div>
      <div className="flex panel-info">
        <h3 id={icon}>{header}</h3>
        {children}
      </div>
    </div>
  );
};
