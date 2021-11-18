/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useState} from "react";
import "./Menu.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { IconContext } from "react-icons";
import {IoMenuOutline, IoCloseOutline} from "react-icons/io5";

export const Menu: React.FC<RouteComponentProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  

  return (
    <>
      <div id="menuIcon" onClick={() => setOpen(!open)}>
        <IconContext.Provider value={{ className: "menuIcon" }}>
            {open?    
              <IoCloseOutline />
            :
              <IoMenuOutline />
            }
          </IconContext.Provider>
      </div>
      {open !== false &&
        <div id="navbar" className="flex" onClick={() => setOpen(false)}>
          <div className="flex column">
              <Link
                to="/"
                className={props.location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
              <Link
                to="/#cognitive-tools"
                className="subLink"
              >
                Cognitive tools
              </Link>
              <Link
                to="/#biofeedback"
                className="subLink"
              >
                Biofeedback
              </Link>
              <Link
                to="/#virtual-reality"
                className="subLink"
              >
                Virtual Reality
              </Link>
              <Link
                to="/team"
                className={
                  props.location.pathname === "/team" ? "active" : ""
                }
              >
                Team
              </Link>
              <Link
                to="/privacy"
                className={props.location.pathname === "/privacy" ? "active" : ""}
              >
                Privacy
              </Link>
              <Link
                to="/privacy#the-small-print"
                className="subLink"
              >
                The small print
              </Link>
              </div>
              </div>
      }
    </>
  );
};

export default withRouter(Menu);
