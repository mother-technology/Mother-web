/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import { Header } from "./Header";
import { Panel } from "./Panel";

export const Main: React.FC = () => {
  return (
    <>
      <div>
        <Header
          className="main-header"
          header="Mother."
          subHeader="Changing minds"
        />
        <div className="side-margin">
          <div className="flex main">
            <p>
              We are a Stockholm-based hard-science deep-tech mental health
              company, filling the niche between conventional health services
              and self-help approaches by translating cutting edge neuroscience
              into easily accessible digital therapeutics.
            </p>
            <p>
              We create high-tech digital therapeutics based on Virtual Reality,
              biofeedback, and guided mental training courses.
            </p>
          </div>
          <div className="flex main">
            <h2>Technology</h2>
            <p>
              We believe the trends in neuroscience are revealing hidden aspects
              of the brain, and that we are approaching a new dawn for digital
              mental health therapeutics, and we aim to be at the forefront of
              these developments.
            </p>
          </div>
          <div className="flex panels">
            <Panel header="Biofeedback" img="./images/biofeedback.png">
              <>
                <p className="small">
                  Anxiety that builds up in our daily life, ratcheting up over
                  time to form a constant background stress, is a common cause
                  for mental ill-health.
                </p>
                <p className="small">
                  {" "}
                  We have developed several tools to directly reduce anxiety as
                  well as training you to give you a say in the way your brain
                  controls your body's emergency reactions.
                </p>
              </>
            </Panel>
            <Panel header="Virtual Reality" img="./images/VR.png">
              <>
                <p className="small">
                  VR is rapidly emerging as a powerful tool for brain health,
                  where even single intense experiences can cause long-term
                  changes to how we perceive the world.{" "}
                </p>
                <p className="small">
                  We use VR to strategically modify the brain's maladaptive
                  background assumptions, causing change that is not
                  instantaneous, but over time will be profound.
                </p>
              </>
            </Panel>
            <Panel header="Cognitive tools" img="./images/cognitive-tools.png">
              <>
                <p className="small">
                  Life is easier to deal with when you have a clear picture of
                  what lies ahead. Our first step is education with innovation.{" "}
                </p>
                <p className="small">
                  Our 'brain care' App, "Consciousness Craft", will ask some
                  simple questions to help you discern where your efforts could
                  best be spent, and then present the latest and most relevant
                  research findings.
                </p>
              </>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
};
