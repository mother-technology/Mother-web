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
              <p>VR therapy is a field emerging from the cutting edge of molecular biological neuroscience and behavioural biology, and technologies developed here require a blend of software development and deep understanding of the medical science underlying the effects. Our team offers a broad palette of skills to satisfy these requirements.</p>
            </div>
          </div>

          <div className="main">
            <h2>
              Why start a company?
            </h2>
            <p>
              We would love to hear from you, please <a href="mailto:info@csd.red">reach out to us </a>.
            </p>
            <Footer />
          </div>
        </div>
    );
};
