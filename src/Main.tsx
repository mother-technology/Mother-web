/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import { Footer } from "./Footer";
import { Header } from "./Header";


export const Main: React.FC = () => {

  return (
    <div>
      <Header className="main-header" withLogo={true} />
      <div className="main">
        <div className="container">
          <h1 className="main">Neuroscience for the people.</h1>
          <p>
            We are a deep-tech, hard-science mental health company based in Stockholm, dedicated to bring cutting edge neuroscience techniques from the lab
            to the public. Using novel methods of biofeedback and immersive VR, we design digital
            therapeutics that affect you at a subconscious level, bringing
            long-lasting mental health benefits.
          </p>
          
          <p>
            We make tools to help people develop mental fortitude to thrive in an uncertain world.
          </p>
          <Footer />  
        </div>
        
        </div>
    </div>
  );
};
