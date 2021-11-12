/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Technology.css";
import { Header } from "./Header";
import { Panel } from "./Panel";

export const Technology: React.FC = () => {
  return (
    <div>
      <Header className="team-header" header="Our secret sauce" />
      <div className="main">
        <div className="container">
        <p>
          We believe the trends in neuroscience are revealing hidden aspects of the brain, and that we are approaching a new dawn for digital mental health
          therapeutics, and we aim to be at the forefront of these developments. 
        </p>
        </div>
      <div className="flex process">
        <Panel
          header="Cognitive tools"
          icon="IoBookOutline">
            <>
            <p className="small">
              Life is easier to deal with when you have a clear picture of what lies ahead. Our first step is education with innovation. </p><p className="small">Our 'brain care' App, M3,  will ask some simple questions to discern where your efforts could best be spent, and then present the latest and most relevant research findings.
            </p>
            </>
        </Panel>
        <Panel
          header="Biofeedback"
          icon="IoAccessibilityOutline"
        >
          <>
          <p className="small">
          Anxiety that builds up in our daily life, ratcheting up over time to form a constant background stress, is a common cause for mental ill-health.</p><p className="small"> We have developed several tools to directly reduce anxiety as well as training you to bring the release valve, your HPA axis, under your conscious control.
          </p>
          </>
        </Panel>
        <Panel
          header="Virtual Reality"
          icon="IoEye"
        >
          <>
          <p className="small">
          VR is rapidly emerging as a powerful tool for brain health, where even single intense experiences can cause long-term changes to how we perceive the world. </p><p className="small">We use VR to strategically modify the brains set of priors, causing change that is not instantaneous, but over time will be profound.
          </p>
          </>
        </Panel>
      </div>
      <div className="container">
        <p>
          
        </p>
        </div>
        </div>
    </div>
  );
};
