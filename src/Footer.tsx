/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="flex narrow-container">
                    <div className="flex links">
                        <Link to="/sick-of-smoking">Sick of Smoking</Link>
                        <Link to="/team">Team</Link>
                        <Link to="/media">Media</Link>
                        <Link to="/privacy">Privacy</Link>
                    </div>
                </div>
                <p>
                    We'd love to hear from you! Send us{" "}
                    <a href="mailto:info@mother.technology">an email</a> or
                    visit{" "}
                    <a href="https://www.linkedin.com/company/mothertechnology">
                        our LinkedIn page
                    </a>
                </p>
                <div className="partner-logo">
                    <a
                        className="partner-logo"
                        href="https://sting.co/companies/mother/"
                    >
                        <img src="./images/sting.png" />
                    </a>
                    <a className="partner-logo" href="https://www.almi.se/">
                        <img src="./images/almi_logo.png" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
