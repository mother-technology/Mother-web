/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import "./Footer.css";
import { Footer } from "./Footer";

export const Main: React.FC = () => {
    return (
      <div>
        <div className="header main-header">
          <div className="overlay"></div>
          <img src="./images/mother-changing-minds-white.png" className="logo" />
        </div>
        <div className="main">
          <h1 className="black">
            Bringing neuroscience to the people.
          </h1>
          <p>
            We are a Stockholm based company, working in the START program with KI Innovations to bring cutting edge neuroscience techniques from the lab to the clinic. Using novel methods with immersive VR, we design digital therapeutics that affect you at a subconscious level, bringing long-lasting mental health benefits.
          </p>
          <p>
            VR offers avenues for treatment for mental health that have never been seen before. We are devoted to realising the vast potential of this powerful technology in an open and socially responsible way.
          </p>

          <h2>VR, really?</h2>
              <p>
                VR is already used to treat post-traumatic stress disorder, anxiety, depression, arachnophobia and vertigo, giving a rate of success equalling that of in-clinic treatment. It is also used to treat schizophrenia, eating disorders, substance abuse, attention-deficit/hyperactivity disorder, pain management and post-stroke rehabilitation.
              </p>

          <div className="text">
<p>This area of research is relatively new, so studies are small and flawed, however they testify to the promise of VR as a new tool in the service of mental health.  If you want to know more about the science, try this <a href="https://www.nature.com/articles/s41598-018-28113-6">review</a>.</p>
<p>In time VR will be seen as a cheaper, more convenient treatment for many mental health issues that are currently treated pharmacologically, with less side-effects and a far more pleasant experience for the patient. <a href="https://www.theguardian.com/science/blog/2017/mar/22/why-virtual-reality-could-be-a-mental-health-gamechanger"> Here's</a> a relatively recent news article about the scene.</p>
<p>We design services for mental health that are not merely reproductions of clinical treatments in VR, but novel methods targetting specific brain systems, and giving predictable, reproducible and beneficial results.</p>
<p>Information about our first VR therapeutic ('Depunctualisation') will be released next year.</p>
<p>Here's an overview of how depunctualisation is performed.</p>

          </div>
          <div className="process">
            <div className="flex process-item">
              <img src="./images/eula.png" className="one" />
              <div className="flex process-info two">
                <h3>1. Information</h3>
                <p className="small">
                  Clicking ‘I agree’ to an unreadable wall-of-text EULA isn't going to cut it when working on your brain, so our first step is to educate you about everything that you will experience, and how these experiences will affect you. You will also undergo some imaging and analysis.
                </p>
              </div>
            </div>

            <div className="flex process-item">
              <img src="./images/process.png" className="four" />
              <div className="flex process-info three">
                <h3>2. Process</h3>
                <p className="small">
                  The VR experience is customised to each individual, and takes about an hour. A guide is present to coach you through the process and answer any questions you might have. There's no hypnosis or visual trickery, however what you see will affect you more deeply than you might imagine.
                </p>
              </div>
            </div>

            <div className="flex process-item">
              <img src="./images/aftercare.png" className="five" />
              <div className="flex process-info six">
                <h3>3. Aftercare app</h3>
                <p className="small">
                  Once the VR experience is finished, we follow-up with a customised program designed to maximise the effect of the experience, allowing you to use the changes as a fulcrum for beneficial change in your life. Change is not instantaneous, but over time will be profound.
                </p>
              </div>
            </div>
          </div>
            <Footer />
        </div>
      </div>

    );
};
