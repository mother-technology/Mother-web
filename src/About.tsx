/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Shared.css";
import "./About.css";
import "./Footer.css";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { PanelPerson } from "./PanelPerson";

export const About: React.FC = () => {
  return (
    <div>
      <Header className="team-header" />
      <div className="container">
        <h1>Who are we?</h1>
        <p>
          VR therapy is a field emerging from the cutting edge of molecular
          biological neuroscience and cybernetics, and technologies developed
          here require a blend of software engineeering and a deep understanding
          of the mechanisms underlying the effects. Our team offers a broad
          palette of skills to satisfy these requirements.
        </p>
        <h2>The team.</h2>
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
          text="Tomás has a couple of degrees in biotech, and did his PhD at the
              Karolinska Institute on disease mechanisms in premature ageing
              syndromes. He jumped off his postdoc to start-up when his research
              linked to branching morphogenesis suggested that immersive VR
              could alter mental states in a long-term and beneficial way."
          linkHref="https://www.linkedin.com/in/tomasmckenna/"
        />

        <PanelPerson
          header="Jenny"
          img="./images/jenny.png"
          text="Jenny has over a decade of experience within Stockholm's tech
              scene, working previously as engineering manager, product owner,
              full-stack developer, head of online marketing and head of
              analysing. Her broad technical experience, marketing capabilities
              and adaptability make her exceptionally well equipped for handling
              a new area of technology."
          linkHref="https://www.linkedin.com/in/jennycahier/"
        />

        <PanelPerson
          header="Mikael"
          img="./images/mikael.png"
          text="Mikael brings his years of experience developing and designing
              complex computer systems on the Stockholm tech scene. His
              knowledge as a system architect is fundamental to the core of our
              VR technology."
          linkHref="https://www.linkedin.com/in/mikael-hultgren-394a9a1a/"
        />

        <PanelPerson
          header="Björn"
          img="./images/bjorn.png"
          text="An internationally acclaimed neuroscientist with a PhD in
              psychology and brain science from MIT, Björn's thorough grounding
              in neuroscience, behavioural biology, and consciousness theory is
              an invaluable resource in the development of our VR-based approach
              to therapy."
          linkHref="https://en.wikipedia.org/wiki/Bj%C3%B6rn_Merker"
          linkName="Wikipedia"
        />

        <PanelPerson
          header="Ana"
          img="./images/ana.png"
          text="A neuroscientist at KI from Portugal via Cambridge, Ana works with
              science communication and acts as a bridge between the clinics and
              the research group."
          linkHref="https://www.linkedin.com/in/anaisabelamaral/"
        />

        <div className="container">
          <h2>Our privacy policy.</h2>
          <p>
            We ask you to share your data with us in order to help us
            continually improve our services and products. We have strong views
            on how to protect your data, read more in our{" "}
            <Link to="/privacy"> privacy policy</Link>.
          </p>
          <Footer />
        </div>
      </div>
    </div>
  );
};
