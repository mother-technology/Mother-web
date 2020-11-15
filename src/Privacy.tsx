import React from "react";
import "./Shared.css";
import "./Privacy.css";
import "./Footer.css";
import { Footer } from "./Footer";


export const Privacy: React.FC = () => {
    return (
        <div>
          <div className="header privacy-header">
            <div className="overlay"></div>
            <div className="ingress">
              <h1 className="white">The boring side</h1>
              <p>Privacy</p>
            </div>
          </div>

          <div className="main">
            <h2>
              Why is it important with privacy blah blah
            </h2>
            <p>
              Test
            </p>
            <Footer />
          </div>
        </div>
    );
};
