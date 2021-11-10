/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
// import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const Footer: React.FC = (props) => {
// export const Footer: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="footer-container">
      <div className="footer flex">
        <div className="link-container">
          <p className="link">
            Contact
          </p>
          <p className="link">
            Privacy
          </p>
          <p className="link">
            Values
          </p>
          </div>
          {/* <a href="/" className="flex logo-container">
            <img className="logo" src="./images/mother-changing-minds-white.png" />
          </a> */}
      </div>
    </div>
  );
};

// export default withRouter(Footer);
