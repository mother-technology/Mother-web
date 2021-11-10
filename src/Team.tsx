/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Shared.css";
import "./Team.css";
import { Header } from "./Header";
import { PanelPerson } from "./PanelPerson";

export const Team: React.FC = () => {
  return (
    <div>
      <Header className="vr-header" header="The allstar team" />
      <div className="main">
          <div className="container">
            <p>
              More than just a team, we are a tight family with deep roots. We came
              together in 2019 with the goal of developing novel tools for mental
              health. We believe our diversity of skillsets is one of our strongest
              assets, giving us a high level of insight for innovation as well as
              making every workday a rewarding challenge.
            </p>
          </div>

          <div className="flex team-members">
            <PanelPerson
              header="Tomás"
              img="./images/tomas.png"
              linkHref="https://www.linkedin.com/in/tomasmckenna/"
            >
              <>
              <p className="small">
              Tomás has a couple of degrees in biotech, and did his PhD at the
                  Karolinska Institute on disease mechanisms in premature ageing
                  syndromes. </p> <p className="small">He jumped off his postdoc to start-up when his research
                  linked to branching morphogenesis suggested that immersive VR
                  could alter mental states in a long-term and beneficial way.
              </p>
              </>
            </PanelPerson>
            <PanelPerson
              header="Jenny"
              img="./images/jenny.png"
              linkHref="https://www.linkedin.com/in/jennycahier/"
            >
              <>
              <p className="small">
              Jenny has over a decade of experience within Stockholm's tech
                  scene, working previously as engineering manager, product owner,
                  full-stack developer, head of online marketing and head of
                  analysing. </p> <p className="small">Her broad technical experience, marketing capabilities
                  and adaptability make her exceptionally well equipped for handling
                  a new area of technology.
              </p>
              </>
            </PanelPerson>
            <PanelPerson
              header="Mikael"
              img="./images/mikael.png"
              linkHref="https://www.linkedin.com/in/mikael-hultgren-394a9a1a/"
            >
              <p className="small">
              Mikael brings his years of experience developing and designing
                  complex computer systems on the Stockholm tech scene. His
                  knowledge as a system architect is fundamental to the core of our
                  VR technology.
              </p>
            </PanelPerson>
            <PanelPerson
              header="Björn"
              img="./images/bjorn.png"
              linkHref="https://en.wikipedia.org/wiki/Bj%C3%B6rn_Merker"
              linkName="Wikipedia"
            >
              <p className="small">
              An internationally acclaimed neuroscientist with a PhD in
                  psychology and brain science from MIT, Björn's thorough grounding
                  in neuroscience, behavioural biology, and consciousness theory is
                  an invaluable resource in the development of our VR-based approach
                  to therapy.
              </p>
            </PanelPerson>
            <PanelPerson
              header="Ana"
              img="./images/ana.png"
              linkHref="https://www.linkedin.com/in/anaisabelamaral/"
              >
              <>
              <p className="small">
                Ana is a Portuguese biochemist and neurobiologist with 9 years of post-doctoral research experience from University of Cambridge and Karolinska Institute. </p> <p className="small">Ana works with communications as Clinical Liaison, acting as a bridge between the research group and clinicians and patients.
              </p>
              </>
            </PanelPerson>
          </div>
          <div className="container">
            </div>
        </div>
      </div>
  );
};
