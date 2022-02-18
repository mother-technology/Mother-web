import React from "react";
import "./Shared.css";
import "./Contact.css";
import { Header } from "./Header";

export const Contact: React.FC = () => {
  return (
    <div>
      <Header
        className="contact-header"
        header="Hello"
        subHeader="Let's get in touch!"
      />
      <div className="side-margin">
        <div className="flex main">
          <p>
            We believe VR is going to open up a new dawn of mental health
            therapeutics. It's a very exciting time for neuroscience, and if
            you're excited about it too, we'd love to hear from you.{" "}
          </p>
          <p>
            If you want to get involved, or get our pitch deck,{" "}
            <a href="mailto:info@mother.technology">reach out</a> to us.
          </p>
        </div>
      </div>
    </div>
  );
};
