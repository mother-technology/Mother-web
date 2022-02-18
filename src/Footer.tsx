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
            <Link to="/privacy">Privacy</Link>
            <Link to="/contact">Contact</Link>
            <a
              className="social-logo"
              href="https://www.linkedin.com/company/mothertechnology"
            >
              <img src="./images/li.png" />
            </a>
          </div>
        </div>
        <p>
          Mother. is a deep tech neuroscience company situated in Stockholm and
          a part of Sting, the leading ecosystem in the Nordics for startups
          with high growth potential.
        </p>
        <div className="partner-logo">
          <a className="partner-logo" href="https://sting.co/companies/mother/">
            <img src="./images/sting.png" />
          </a>
          <a className="partner-logo" href="https://www.blingstartup.se/">
            <img src="./images/bling.png" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Footer);
