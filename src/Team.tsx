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
      <Header className="vr-header" 
        header="The allstar team" 
        subHeader="Our diverse and dedicated specialists"
      />
      <div className="side-margin">
          <div className="flex main">
            <p>
              More than just a team, we are a tight family with deep roots. We came
              together in 2019 with the goal of developing novel tools for developing mental
              resilience. We believe our diversity of skillsets is one of our strongest
              assets, giving us a high level of insight for innovation as well as
              making every workday a rewarding challenge.
            </p>
          </div>

          <div className="flex persons">
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
              Ana is a Portuguese biochemist/neurobiologist with nine years of post-doctoral research experience from University of Cambridge and the Karolinska Institutet.</p> <p className="small">
Recently trained in business and innovation and currently working in scientific communications at iBET, Portugal, Ana is a true people person and natural communicator and will act as our CMO.
              </p>
              </>
            </PanelPerson>
          </div>
          <div className="flex main">
              <h2 id="our-values">Our values</h2>
              <p>
                We want to reasses the norms of what it means to work for a corporation, and aim to balance the relationship of power between worker and management, treating people like the actual experts they are, giving them freedom to work on what they think is important. It's not just the morally right thing to do, it's the best game theory model for success.
              </p>
              <p>
              We also promise to treat our customers with care and respect, to take a strong and diametrically opposing stance to the current norm of customer data monetisation, and to maintain a strict privacy and security discipline. Consumers today hunger for companies that follow through on their word, act sincerely and with integrity, with a focus on sustainability and humanitarianism. We promise to never sacrifice these values.
              </p>
              <p>
              We are determined to act in a socially responsible way, to prioritise the needs and values of the societies we operate in, and to care proactively for the planet. This doesn't just mean vegetarian lunches and taking the train instead of a flight, but in proactively taking a environmentally conscious stance, and leading by example.
              </p>
              <p>
              We target the beneficial, working as much as possible with free and open source software, privacy focused, with our intentions and actions open and public.
              </p>
              <h2>
                Our interests.
              </h2>
              <p>
                We work with software tools like Unity, Blender, Meshroom, Meshlab and R. We like hardware too, EEG, GSR, eye trackers and of course, XR. And we like research in neuroscience, neural nets, graph theory, 'Bayesian' psychology, systemic psychotherapy, cognitivist therapy, reality therapy, systems engineering, cybernetics, structural-functionalism and branching morphogenesis.
                </p>
                <p>
                If you want to get involved, or recieve our pitch deck, <a href="mailto:info@csd.red">reach out</a> to us.
                </p>
            </div>
          
        </div>
      </div>
  );
};
