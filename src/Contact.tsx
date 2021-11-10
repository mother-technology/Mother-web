import React from "react";
import "./Shared.css";
import "./Contact.css";
import { Header } from "./Header";

export const Contact: React.FC = () => {
  return (
    <div>
      <Header className="contact-header" header="Join the revolution." />
      <div className="main">
        <div className="container">
        <h2>Our values.</h2>
          <p>
            We want to reasses the norms of what it means to work for a
            corporation, and aim to balance the relationship of power between
            worker and management, treating people like the actual experts they
            are, giving them freedom to work on what they think is important. It's
            not just the morally right thing to do, it's the best game theory
            model for success.
          </p>
          <p>
            We also promise to treat our customers with care and respect, to take
            a strong and diametrically opposing stance to the current norm of
            customer data monetisation, and to maintain a strict privacy and
            security discipline. Consumers today hunger for companies that follow
            through on their word, act sincerely and with integrity, with a focus
            on sustainability and humanitarianism. We promise to never sacrifice
            these values.
          </p>
          <p>
            We are also determined to act in a socially responsible way, to
            prioritise the needs and values of the societies we operate in, and to
            care proactively for the planet. This doesn't just mean vegetarian
            lunches and taking the train instead of a flight, but in proactively
            taking a environmentally conscious stance, and leading by example.
          </p>
          <p>
            We target the beneficial, working as much as possible with free and
            open source software, privacy focused, with our intentions and actions
            open and public.
          </p>
          <h2>Our interests.</h2>
          <p>
            We work with software tools like Unity, Blender, Meshroom, Meshlab and
            R. We like hardware too, EEG, GSR, eye trackers and of course, XR. And
            we like research in neuroscience, neural nets, graph theory,
            'Bayesian' psychology, systemic psychotherapy, cognitivist therapy,
            reality therapy, systems engineering, cybernetics,
            structural-functionalism and branching morphogenesis.
          </p>
          <p>
            If you want to get involved,{" "}
            <a href="mailto:info@csd.red">reach out</a> to us. And check out our{" "}
            <a href="https://mother.technology/files/mother-pitch-deck.pdf">
              pitch deck
            </a>{" "}
            (pdf) too!
          </p>
          <p>
            We believe VR is going to open up a new dawn of mental health
            therapeutics. It's a very exciting time for neuroscience, and if
            you're excited about it too, we'd love to hear from you.{" "}
          </p>
          <p>
            Please <a href="mailto:info@csd.red">reach out</a> to us.
          </p>
        </div>
        </div>
      </div>
  );
};
