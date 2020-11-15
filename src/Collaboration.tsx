/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Collaboration.css";
import "./Footer.css";
import { Footer } from "./Footer";

export const Collaboration: React.FC = () => {
    return (
      <div>
        <div className="header vr-header">
          <div className="overlay"></div>
          <div className="ingress">
            <h1 className="white">Would you like to collaborate?</h1>
            <p>VR therapy is a field emerging from the cutting edge of molecular biological neuroscience and behavioural biology, and technologies developed here require a blend of software development and deep understanding of the medical science underlying the effects. Our team offers a broad palette of skills to satisfy these requirements.</p>
          </div>
        </div>

        <div className="main">
          <h2>
            Why start a company?
          </h2>
          <p>
            Because we wanted to help the world! Because there are so many people out there in need of us. Yada yada.
          </p>
          <h2>
            The amazing team
          </h2>
          <p>
            We have a wide background of different skills.
          </p>
          <Footer />
        </div>
      </div>
    );
};
