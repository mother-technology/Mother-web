import React from "react";
import "./Shared.css";
import "./Contact.css";
import "./Footer.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Contact: React.FC = () => {
  return (
    <div>
      <Header className="contact-header" />
      <div className="container">
        <h1>Give us a shout.</h1>
        <p>
          We believe VR is going to open up a new dawn of mental health
          therapeutics. It's a very exciting time for neuroscience, and if
          you're excited about it too, we'd love to hear from you.{" "}
        </p>
        <p>
          Please <a href="mailto:info@csd.red">reach out</a> to us.
        </p>
        <Footer />
      </div>
    </div>
  );
};
