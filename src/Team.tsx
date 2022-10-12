/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { Spacer } from "./Spacer";
import "./Shared.css";
import "./Team.css";

export const Team: React.FC = () => {
    return (
        <div>
            <Header
                className="team-header"
                header="The allstar team"
                subHeader="Our diverse and dedicated specialists"
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We come from many backgrounds, with a wide range of
                        competencies in scientific research, business management
                        and product development, with deep expertise.
                    </p>
                    <p>
                        More than just a team, we are a tight-knit family with
                        deep roots and one unified purpose, to create
                        democratised solutions that change lives for the better.
                    </p>
                </div>
                <Spacer height="50px" />
                <div className="flex persons">
                    <img src="/images/team.png" alt="team" />
                </div>
                <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <div className="panels">
                        <Panel
                            header="Jenny"
                            backgroundColor="black"
                            img="/images/jenny.png"
                        >
                            <>
                                <p>
                                    <a href="https://www.linkedin.com/in/jennycahier/">
                                        Jenny Cahier
                                    </a>{" "}
                                    [CEO] has over a decade of experience within
                                    Stockholm's tech scene, working previously
                                    as engineering manager, head of online
                                    marketing, head of analysing and full stack
                                    developer. Her broad technical experience,
                                    marketing capabilities and adaptability make
                                    her exceptionally well equipped for handling
                                    a new area of technology.{" "}
                                </p>
                            </>
                        </Panel>
                        <Panel
                            header="Tomás"
                            backgroundColor="black"
                            img="/images/tomas.png"
                        >
                            <>
                                <p>
                                    <a href="https://www.linkedin.com/in/tomasmckenna/">
                                        Tomás McKenna
                                    </a>{" "}
                                    [CIO] has a couple of degrees in biotech,
                                    and did his PhD at the Karolinska Institute
                                    on disease mechanisms in premature ageing
                                    syndromes. He jumped off his postdoc to
                                    start-up when his research linked to
                                    branching morphogenesis suggested that
                                    immersive VR could alter mental states in a
                                    long-term and beneficial way.
                                </p>
                            </>
                        </Panel>
                    </div>
                    <div className="panels">
                        <Panel
                            header="Björn"
                            backgroundColor="black"
                            img="/images/bjorn.png"
                        >
                            <>
                                <p>
                                    <a href="https://en.wikipedia.org/wiki/Bj%C3%B6rn_Merker">
                                        Björn Merker
                                    </a>{" "}
                                    [Head of Research & Development] is an
                                    internationally acclaimed neuroscientist.
                                    With a PhD in psychology and brain science
                                    from MIT, his thorough grounding in
                                    neuroscience, behavioural biology, and
                                    consciousness theory is an invaluable
                                    resource in the development of our VR-based
                                    approach to therapy.
                                </p>
                            </>
                        </Panel>
                        <Panel
                            header="Ingrid"
                            backgroundColor="black"
                            img="/images/ingrid.png"
                        >
                            <>
                                <p>
                                    <a href="https://www.linkedin.com/in/ingrid-salomonsson-98802b2/">
                                        Ingrid Salomonsson
                                    </a>{" "}
                                    [CCO] has 20 years of experience from the
                                    digital media industry within several roles
                                    - all related to sales, partnership
                                    management business development and
                                    strategy. She holds a Master of Science
                                    degree from Stockholm School of Economics
                                    and has also been teaching yoga for 10
                                    years. She will bring her passion for both
                                    business and wellbeing together in the role
                                    as CCO at Mother.
                                </p>
                            </>
                        </Panel>
                    </div>
                </div>

                {/* <div className="flex main">
                    <h2 id="our-values">Our values</h2>
                    <p>
                        We want to reasses the norms of what it means to work
                        for a corporation, and aim to balance the relationship
                        of power between worker and management, treating people
                        like the actual experts they are, giving them freedom to
                        work on what they think is important. It's not just the
                        morally right thing to do, it's the best game theory
                        model for success.
                    </p>
                    <p>
                        We also promise to treat our customers with care and
                        respect, to take a strong and diametrically opposing
                        stance to the current norm of customer data
                        monetisation, and to maintain a strict privacy and
                        security discipline. Consumers today hunger for
                        companies that follow through on their word, act
                        sincerely and with integrity, with a focus on
                        sustainability and humanitarianism. We promise to never
                        sacrifice these values.
                    </p>
                    <p>
                        We are determined to act in a socially responsible way,
                        to prioritise the needs and values of the societies we
                        operate in, and to care proactively for the planet. This
                        doesn't just mean vegetarian lunches and taking the
                        train instead of a flight, but in proactively taking a
                        environmentally conscious stance, and leading by
                        example.
                    </p>
                    <p>
                        We target the beneficial, working as much as possible
                        with free and open source software, privacy focused,
                        with our intentions and actions open and public.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

// let usp = [
//     {
//         title: "Research-based",
//         text: "Our goal is to develop cutting-edge technology, straight from the neuroscience lab to you.",
//     },
//     {
//         title: "Changing the mind the mind's way",
//         text: "Hard work is never easy, but with VR we can use the brains implicit learning systems to change your mind, for the better. ",
//     },
//     {
//         title: "Improved self-knowledge",
//         text: "You're in the driving seat. With our software, the goal isn't just to change your mind, but to reveal how the mind works to you. Showing how it works is part of the process.",
//     },
// ];
// <USPList usp={usp} />
// import { USPList } from "./USPList";
