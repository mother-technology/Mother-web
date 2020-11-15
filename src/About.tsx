/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./About.css";
import "./Footer.css";
import { Footer } from "./Footer";

export const About: React.FC = () => {
    return (
      <div>
      <div className="header team-header">
        <div className="overlay"></div>
        <div className="ingress">
          <h1 className="white">The team</h1>
          <p>VR therapy is a field emerging from the cutting edge of molecular biological neuroscience and behavioural biology, and technologies developed here require a blend of software development and deep understanding of the medical science underlying the effects. Our team offers a broad palette of skills to satisfy these requirements.</p>
        </div>
      </div>

      <div className="main">
        <h2>
          Why start a company?
        </h2>
        <p>
          Because we wanted to help the world! Because there are so many people out there in need of us. Yada yada.
        </p>
        <h2>
          The amazing team
        </h2>
        <p>
          We have a wide background of different skills.
        </p>
        <div className="team-members">
          <div className="flex team-member">
            <div className="flex member-img">
              <img src="./images/tomas.png" className="one" />
            </div>
            <div className="member-info two">
              <h3>Tomás</h3>
              <p className="small">
                Tomás has a couple of degrees in biotech, and did his PhD at the Karolinska Institute on disease mechanisms in premature ageing syndromes. He jumped off his postdoc to start-up when his research linked to branching morphogenesis suggested the immersive VR could alter mental states in a long-term and positive way.
              </p>
            </div>
          </div>
        </div>

                <div className="flex team-member">
                  <div className="flex member-img four">
                    <img src="./images/jenny.png" />
                  </div>
                  <div className="member-info three">
                    <h3>Jenny</h3>
                    <p className="small">
                      Jenny has over a decade of experience within Stockholm's tech scene, working previously as engineering manager, product owner, full-stack developer, head of online marketing and head of analysing. Her broad technical experience, marketing capabilities and adaptability make her exceptionally well equipped for handling a new area of technology.
                    </p>
                  </div>
                </div>



        <div className="flex team-member">
          <div className="flex member-img five">
            <img src="./images/mikael.png" />
          </div>
          <div className="member-info six">
            <h3>Mikael</h3>
            <p className="small">
              Mikael brings his years of experience developing and designing complex computer systems on the Stockholm tech scene. His knowledge as a system architect is fundamental to the core of our VR technology.
            </p>
          </div>
        </div>
        <div className="flex team-member">
          <div className="flex member-img eight">
            <img src="./images/bjorn.png" />
          </div>
          <div className="member-info seven">
            <h3>Björn</h3>
            <p className="small">
              An internationally acclaimed neuroscientist with a PhD in psychology and brain science from MIT, Björn's thorough grounding in neuroscience, behavioural biology, and consciousness theory is an invaluable resource in the development of our VR-based approach to therapy.
            </p>
          </div>
        </div>
          <div className="flex  team-member">
          <div className="flex member-img nine">
            <img src="./images/ana.png" />
          </div>
            <div className="member-info ten">
              <h3>Ana</h3>
              <p className="small">
                A neuroscientist at KI from Portugal via Cambridge, Ana works with science communication and acts as a bridge between the clinics and the research group.
              </p>
            </div>
        </div>
        <Footer />
        </div>
        </div>
    );
};
