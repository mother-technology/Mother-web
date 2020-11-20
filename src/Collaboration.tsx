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
            <h1 className="white">Would you like to partner with us?</h1>
            <p>We come from a wide range of backgrounds, both from the academic world and the corporate. And we want to maintain that diversity by being open to collaboration.</p>
          </div>
        </div>

        <div className="main">
          <h2>
            Our interests.
          </h2>
          <p>
            We work with software tools like Unity, Blender, Meshroom, Meshlab and R. We like hardware too, EEG, GSR, eye trackers and of course, XR. And we like research in neuroscience, neural nets, graph theory, 'Bayesian' psychology, systemic psychotherapy, cognitivist therapy, reality therapy, systems engineering, cybernetics, structural-functionalism and branching morphogenesis.
          </p>
          <p>
Would you like to collaborate with us on research? Contact us at <a href="mailto:info@csd.red">here</a>.
            </p>
            <p>
Or would you like to invest in our company? We're looking for board members with an interest in making the world a better place. Please mail us <a href="mailto:invest@mother.technology">here</a>!
              </p>

          <Footer />
        </div>
      </div>
    );
};
