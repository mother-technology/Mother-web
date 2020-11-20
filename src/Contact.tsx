import React from "react";
import "./Shared.css";
import "./Contact.css";
import "./Footer.css";
import { Footer } from "./Footer";


export const Contact: React.FC = () => {
    return (
        <div>
          <div className="header contact-header">
            <div className="overlay"></div>
            <div className="ingress">
              <h1 className="white">Give us a shout.</h1>
              <p>We believe VR is going to open up a new dawn of mental health therapeutics. It's a very exciting time for neuroscience, and if you're excited about it too, we'd love to hear from you. </p>
            </div>
          </div>
          <div className="main">
          <p>Please <a href="mailto:info@csd.red">reach out</a> to us.</p>
            <Footer />
          </div>
        </div>
    );
};
