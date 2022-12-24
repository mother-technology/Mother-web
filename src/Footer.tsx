/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { Spacer } from "./Spacer";


export const Footer: React.FC = () => {
    return (
        <div className="footer-container">
            <div className="flex footer">
                <h4 className="footer-header">
                    Follow us
                </h4>
                <p>
                    Sign up for <a href="mailto:info@mother.technology?subject=Subscribe to your newsletter&body=Hi, I would like to subscribe to your quarterly newsletter.">our newsletter</a>, email us or follow us on social media
                </p>
                <Spacer height="20px" />
                <div className="flex contact-logos">
                    <a href="https://www.linkedin.com/company/mothertechnology">
                            <img src="./images/icon_ln.png" className="contact-logo" />
                    </a>
                    <a href="mailto:info@mother.technology">
                            <img src="./images/icon_mail.png" className="contact-logo" />
                        </a>
                </div>
                <Spacer height="80px" hasLine={true} inverted={true} />
                <div className="partner-logo">
                    <a href="https://sting.co/companies/mother/">
                        <img src="./images/sting.png" />
                    </a>
                    <a href="https://www.almi.se/"> <img src="./images/almi_logo.png" /></a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
