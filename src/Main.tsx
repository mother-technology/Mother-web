/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { CircleWithText } from "./CircleWithText";

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

          <div className="flex panels">
            <Panel header="The brain" backgroundColor="pink">
              <>
                <p className="small">The Brain, home to us all! </p>
                <p className="small">
                  Never has the research on our most thinky organ been so
                  advanced, yet globally mental health plummets.{" "}
                </p>
                <p className="small">
                  Anxiety, burnout, depersonalisation, depression, and mood
                  disorders are all too common, and amongst the youth they're on
                  the rise. These mental health issues highlight the unhappy
                  state of our brains.
                </p>
              </>
            </Panel>
            <Panel header="Research-based" backgroundColor="yellow">
              <>
                <p className="small">
                  In research labs across the world, using tools such as VR or
                  psychedelics, in molecular biology labs, in fMRI studies, the
                  cutting edge of science is revealing aspects of our brains
                  which show us a clear path forward for brain health.
                </p>
                <p className="small">
                  From this and our own in-house research we develop novel
                  digital therapeutics targetting the brain.
                </p>
              </>
            </Panel>
            <Panel header="The target" backgroundColor="black">
              <>
                <p className="small">
                  We aim to enable you to fully affirm your life, yourself, and
                  your mode of functioning. We want your brain (and body)
                  happily ticking along like a Swiss watch. We want you to feel
                  like every day is the best day of your life, until tomorrow...
                </p>
                <p className="small">
                  And we want you to know who you are, where you want to go, and
                  how to get there.
                </p>
              </>
            </Panel>
          </div>
          <div className="separator" />
          <div className="flex main">
            <h2>VR text</h2>
            <p>
              We believe the trends in neuroscience are revealing hidden aspects
              of the brain, and that we are approaching a new dawn for digital
              mental health therapeutics, and we aim to be at the forefront of
              these developments.
            </p>
          </div>
          <CircleWithText backgroundColor="pink">
            <p>
              We believe the trends in neuroscience are revealing hidden aspects
              of the brain, and that we are approaching a new dawn for digital
              mental health therapeutics, and we aim to be at the forefront of
              these developments.
            </p>
          </CircleWithText>
          <div className="separator" />
          <div className="flex main">
            <h2>Our other products</h2>
            <p>What is in it for you</p>
          </div>
          <div className="flex panels">
            <Panel
              header="Hertz."
              backgroundColor="light-grey"
              color="dark"
              img="/images/hz-round.png"
            >
              <>
                <p className="small dark">Visit out hertz page</p>
              </>
            </Panel>
            <Panel
              header="Hertz."
              backgroundColor="light-grey"
              color="dark"
              img="/images/hz-lite-round.png"
            >
              <>
                <p className="small dark">Visit out hertz page</p>
              </>
            </Panel>
            <Panel
              header="Hertz."
              backgroundColor="light-grey"
              color="dark"
              img="/images/cc.png"
            >
              <>
                <p className="small dark">Visit out hertz page</p>
              </>
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
};
