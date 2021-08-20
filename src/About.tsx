/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Link } from "react-router-dom";
import "./Shared.css";
import "./About.css";
import "./Footer.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const About: React.FC = () => {
  return (
    <div>
      <Header className="team-header" />
      <div className="main">
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

        <div className="team-members">
          <div className="flex member-item">
            <img src="./images/tomas.png" className="one" />
            <div className="flex member-info two">
              <h3>Tomás</h3>
              <p className="small">
                Tomás has a couple of degrees in biotech, and did his PhD at the
                Karolinska Institute on disease mechanisms in premature ageing
                syndromes. He jumped off his postdoc to start-up when his
                research linked to branching morphogenesis suggested that
                immersive VR could alter mental states in a long-term and
                beneficial way.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/tomasmckenna/">
                  Linkedin.
                </a>
              </p>
            </div>
          </div>

          <div className="flex member-item">
            <img src="./images/jenny.png" className="four" />
            <div className="flex member-info three">
              <h3>Jenny</h3>
              <p className="small">
                Jenny has over a decade of experience within Stockholm's tech
                scene, working previously as engineering manager, product owner,
                full-stack developer, head of online marketing and head of
                analysing. Her broad technical experience, marketing
                capabilities and adaptability make her exceptionally well
                equipped for handling a new area of technology.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/jennycahier/">Linkedin.</a>
              </p>
            </div>
          </div>

          <div className="flex member-item">
            <img src="./images/mikael.png" className="five" />
            <div className="flex member-info six">
              <h3>Mikael</h3>
              <p className="small">
                Mikael brings his years of experience developing and designing
                complex computer systems on the Stockholm tech scene. His
                knowledge as a system architect is fundamental to the core of
                our VR technology.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/mikael-hultgren-394a9a1a/">
                  Linkedin.
                </a>
              </p>
            </div>
          </div>

          <div className="flex member-item">
            <img src="./images/bjorn.png" className="eight" />
            <div className="flex member-info seven">
              <h3>Björn</h3>
              <p className="small">
                An internationally acclaimed neuroscientist with a PhD in
                psychology and brain science from MIT, Björn's thorough
                grounding in neuroscience, behavioural biology, and
                consciousness theory is an invaluable resource in the
                development of our VR-based approach to therapy.
              </p>
              <p>
                <a href="https://en.wikipedia.org/wiki/Bj%C3%B6rn_Merker">
                  Wikipedia.
                </a>
              </p>
            </div>
          </div>

          <div className="flex member-item">
            <img src="./images/ana.png" className="nine" />
            <div className="flex member-info ten">
              <h3>Ana</h3>
              <p className="small">
                A neuroscientist at KI from Portugal via Cambridge, Ana works
                with science communication and acts as a bridge between the
                clinics and the research group.
              </p>
              <p>
                <a href="https://www.linkedin.com/in/anaisabelamaral/">
                  Linkedin.
                </a>
              </p>
            </div>
          </div>
        </div>
        <h2>Our privacy policy.</h2>
        <p>
          We ask you to share your data with us in order to help us continually
          improve our services and products. We have strong views on how to
          protect your data, read more in our{" "}
          <Link to="/privacy"> privacy policy</Link>.
        </p>
        <Footer />
      </div>
    </div>
  );
};
