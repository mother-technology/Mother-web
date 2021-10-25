/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Panel } from "./Panel";

export const Main: React.FC = () => {

  return (
    <div>
      <Header className="main-header" withLogo={true} />
      <div className="container">
        <h1 className="main">Neuroscience for the people.</h1>
        <p>
          We are a deep-tech neuroscience based in Stockholm, working in the START program with KI
          Innovations to bring cutting edge neuroscience techniques from the lab
          to the public. Using novel methods of immersive VR, we design digital
          therapeutics that affect you at a subconscious level, bringing
          long-lasting mental health benefits.
        </p>
        <p>
          VR offers avenues for treatment for mental health that have never been
          seen before. We are devoted to realising the vast potential of this
          powerful technology in an open and socially responsible way.
        </p>
        <p>
          Although we feel VR is the most promising avenue for designing
          powerful mental health tools, we also have developed applications for
          smartwatches and smartphones. We are technology agnostic and target
          any platform with possibilities.
        </p>
        <p>
          Our purpose is to make tools to help people feel better in a stressful
          world.
        </p>
        
      </div>
      <div className="flex process">
        <Panel
          header="1. Information"
          icon="IoBookOutline"
          text="Clicking ‘I agree’ to an unreadable wall-of-text EULA isn't going to cut it when working on your brain, so our first step is to educate you about everything that you will experience, and how these experiences will affect you. You will also undergo some imaging and analysis."
        />
        <Panel
          header="2. Process"
          icon="IoAccessibilityOutline"
          text="The VR experience is customised to each individual, and takes about an hour. A guide is present to coach you through the process and answer any questions you might have. There's no hypnosis or visual trickery, however what you see will affect you more deeply than you might imagine."
        />
        <Panel
          header="3. Aftercare"
          icon="IoTrendingUp"
          text="After the VR experience, we follow-up with a customised program designed to maximise the effect of the experience, allowing you to use the changes as a fulcrum for beneficial change in your life. This app will also be available as a stand-alone B2C mental wellness guide.Change is not instantaneous, but over time will be profound."
        />
      </div>
      <Footer />
    </div>
  );
};
