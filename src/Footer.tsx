/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
// import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const Footer: React.FC = (props) => {
// export const Footer: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="footer">
      <div className="link-container">
        <p className="link">
          Contact us
        </p>
        <p className="link">
          Privacy
        </p>
        <p className="link">
          Our values
        </p>
        {/* <Link
            to="/"
            className={props.location.pathname === "/" ? "active" : ""}
          >
            About
        </Link>
        <Link
            to="/"
            className={props.location.pathname === "/" ? "active" : ""}
          >
            Privacy
        </Link>
        <Link
            to="/"
            className={props.location.pathname === "/" ? "active" : ""}
          >
            Test 2
        </Link> */}
        </div>
        <a href="/">
          <img className="logo" src="./images/mother-changing-minds-white.png" />
        </a>
    </div>
  );
};

// export default withRouter(Footer);
