/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Main.css";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { PanelSellItem } from "./PanelSellItem";
import { CircleWithText } from "./CircleWithText";
import { USPList } from "./USPList";

export const Main: React.FC = () => {
  let usp = [
    {
      title: "Research-based",
      text: "With our solution, you know that you get the real science, based on latest neuroscience papers.",
    },
    { title: "Title2", text: "Text2" },
  ];

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
            <Panel header="The science" backgroundColor="yellow">
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
            <USPList usp={usp} />
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
          <div className="flex panel-sell-items">
            <PanelSellItem
              header="Hertz."
              img="/images/hz-square.png"
              link="/hertz"
              linkText="Read more about Hertz."
              buttonText="DOWNLOAD NOW"
              buttonLink="https://apps.apple.com/us/app/hertz-an-anxiety-treatment/id1529146685"
            >
              <>
                <p className="small">
                  Work on your vagus nerve. Became a more calm person.
                </p>
              </>
            </PanelSellItem>
            <PanelSellItem
              header="Hertz lite."
              img="/images/hz-lite-square.png"
              link="/hertz-lite"
              linkText="Read more about Hertz lite."
              buttonText="DOWNLOAD NOW"
              buttonLink="https://apps.apple.com/us/app/hertz-an-anxiety-treatment/id1529146685"
            >
              <>
                <p className="small">
                  For free. No ads. But still makes you pay.
                </p>
              </>
            </PanelSellItem>

            <PanelSellItem
              header="Self-confidence."
              img="/images/hz-square.png"
              link="/self-confidence"
              linkText="Read more about our coming app."
            >
              <>
                <p className="small">Get better self confidence.</p>
              </>
            </PanelSellItem>
          </div>
        </div>
      </div>
    </>
  );
};

// header: string;
// img: string;
// link?: string;
// linkText?: string;
// buttonText?: string;
// buttonLink?: string;
// children: JSX.Element;
