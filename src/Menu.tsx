/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Menu.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import { IconContext } from "react-icons";
import {IoMenuOutline, IoCloseOutline} from "react-icons/io5";

// type MenuProps = {
//   open: boolean;
//   onClick: (open: boolean) => void;
// };
export const Menu: React.FC<RouteComponentProps> = (props) => {
  const open:boolean = false;
// export const Menu: React.FC<MenuProps> = ({open}: MenuProps) => {
  return (
    <>
      <div id="menuIcon">
        <IconContext.Provider value={{ className: "menuIcon" }}>
            {open?    
              <IoMenuOutline />
            :
              <IoCloseOutline />
            }
          </IconContext.Provider>
      </div>
      {open !== false &&
        <div id="navbar" className="flex">
            <div className="flex column">
              <Link
                to="/"
                className={props.location.pathname === "/" ? "active" : ""}
              >
                Home
              </Link>
              <Link
                to="/"
                className={ `subLink${
                  props.location.pathname === "/collaboration" ? "active" : ""
                }`
                }
              >
                Test 1
              </Link>
              <Link
                to="/"
                className={ `subLink${
                  props.location.pathname === "/collaboration" ? "active" : ""
                }`
                }
              >
                Test 2
              </Link>
            </div>
            <div className="flex column">
              <Link
                to="/about"
                className={props.location.pathname === "/about" ? "active" : ""}
              >
                Team
              </Link>
              <Link
                to="/collaboration"
                className={
                  props.location.pathname === "/collaboration" ? "active" : ""
                }
              >
                Collaborate
              </Link>
              <Link
                to="/collaboration"
                className={ `subLink${
                  props.location.pathname === "/collaboration" ? "active" : ""
                }`
                }
              >
                Collab 1
              </Link>
              </div>
          </div>
      }
    </>
  );
};

export default withRouter(Menu);
