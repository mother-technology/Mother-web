/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const Footer: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="footer-container">
      <div className="flex footer">
        <div className="flex narrow-container">

          <div className="flex links">
            <Link
                to="/contact"
            >
                Contact
            </Link>
            <Link
                to="/privacy"
            >
                Privacy
            </Link>
            <Link
                to="/values"
            >
                Values
            </Link>
            </div>
            <p>Mother. is a deep tech neuroscience comapany situated in Stockholm.</p>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
