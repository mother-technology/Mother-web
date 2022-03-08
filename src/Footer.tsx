/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Footer.css";
import { Form } from "./Form";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const Footer: React.FC<RouteComponentProps> = (props) => {
  return (
    <div className="footer-container">
      <div className="flex footer">
        <div className="flex narrow-container">
          <div className="flex links">
            <Link to="/team">Team</Link>
            <Link to="/privacy">Privacy</Link>
            <Link to="/media">Media</Link>
          </div>
        </div>
        <p>
          We'd love to hear from you! Send us{" "}
          <a href="mailto:info@mother.technology">an email</a> or visit{" "}
          <a href="https://www.linkedin.com/company/mothertechnology">
            our LinkedIn page
          </a>{" "}
          - or sign up for our latest product releases
        </p>
        <div className="flex contact-form">
          <Form />
        </div>
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
