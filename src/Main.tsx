/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import "./Footer.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Panel } from "./Panel";

export const Main: React.FC = () => {
  return (
    <div>
      <Header className="main-header" withLogo={true} />
      <div className="main">
        <h1>Bringing neuroscience to the people.</h1>
        <p>
          We are based in Stockholm, working in the START program with KI
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
        <h2>VR, really?</h2>
        <p>
          VR is already used to treat post-traumatic stress disorder, anxiety,
          depression, arachnophobia and vertigo, giving a rate of success
          equalling that of in-clinic treatment. It is also used to treat
          schizophrenia, eating disorders, substance abuse,
          attention-deficit/hyperactivity disorder, pain management and
          post-stroke rehabilitation.
        </p>

        <p>
          This area of research is relatively new, so studies are small and
          flawed, however they testify to the promise of VR as a new tool in the
          service of mental health. If you want to know more about the science,
          try this{" "}
          <a href="https://www.nature.com/articles/s41598-018-28113-6">
            review
          </a>
          .
        </p>
        <p>
          In time VR will be seen as a more cost effective and convenient
          treatment for many mental health issues that are currently treated
          pharmacologically, with less side-effects and a more pleasant
          experience for the patient.{" "}
          <a href="https://www.theguardian.com/science/blog/2017/mar/22/why-virtual-reality-could-be-a-mental-health-gamechanger">
            {" "}
            Here's
          </a>{" "}
          a relatively recent news article about the scene.
        </p>
        <p>
          We design services for mental health that are not merely imitations of
          clinical treatments in VR, but novel methods targeting specific brain
          systems, giving predictable, reproducible and beneficial results.
        </p>
        <h2>Depunctualisation</h2>
        <p>
          Information about our first VR therapeutic ('Depunctualisation') will
          be released next year.
        </p>
        <p>Here's an overview of how depunctualisation is performed.</p>

        <div className="flex process">
          <Panel
            header="1. Information"
            icon="./images/eula.png"
            text="Clicking ‘I agree’ to an unreadable wall-of-text EULA isn't going to cut it when working on your brain, so our first step is to educate you about everything that you will experience, and how these experiences will affect you. You will also undergo some imaging and analysis."
          />
          <Panel
            header="2. Process"
            icon="./images/process.png"
            text="The VR experience is customised to each individual, and takes about an hour. A guide is present to coach you through the process and answer any questions you might have. There's no hypnosis or visual trickery, however what you see will affect you more deeply than you might imagine."
          />
          <Panel
            header="3. Aftercare"
            icon="./images/aftercare.png"
            text="Here is a test text"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};
