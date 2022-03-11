/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./Menu.css";

export const Menu: React.FC<RouteComponentProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);
  const height = document.body.clientHeight;
  let right: string = "25px";

  return (
    <>
      <div
        id="menuIcon"
        style={{ right: right }}
        onClick={() => setOpen(!open)}
      >
        <IconContext.Provider value={{ className: "menuIcon" }}>
          {open ? <IoCloseOutline /> : <IoMenuOutline />}
        </IconContext.Provider>
      </div>
      {open !== false && (
        <div
          id="navbar"
          className="flex"
          style={{ height: height }}
          onClick={() => setOpen(false)}
        >
          <div className="flex column">
            <Link
              to="/"
              className={props.location.pathname === "/" ? "active" : ""}
            >
              Home
            </Link>
            <Link to="/#vr" className="subLink">
              VR
            </Link>

            <Link
              to="/"
              className={props.location.pathname === "/" ? "active" : ""}
            >
              Products
            </Link>

            <Link to="/hertz" className="subLink">
              Hertz
            </Link>
            <Link to="/hertz-lite" className="subLink">
              Hertz lite
            </Link>
            <Link to="/consciousness-craft" className="subLink">
              Consciousness craft
            </Link>
            <Link
              to="/team"
              className={props.location.pathname === "/team" ? "active" : ""}
            >
              Team
            </Link>
            <Link to="/team#our-values" className="subLink">
              Our values
            </Link>
            <Link to="/team#our-interests" className="subLink">
              Our interests
            </Link>
            <Link
              to="/media"
              className={props.location.pathname === "/media" ? "active" : ""}
            >
              Media
            </Link>
            <Link
              to="/privacy"
              className={props.location.pathname === "/privacy" ? "active" : ""}
            >
              Privacy
            </Link>
            <Link to="/privacy#the-small-print" className="subLink">
              The small print
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default withRouter(Menu);
