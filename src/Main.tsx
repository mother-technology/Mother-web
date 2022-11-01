/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { PanelTestimonial } from "./PanelTestimonial";
import "./Main.css";
import "./Shared.css";
import { USPList } from "./USPList";
import { Spacer } from "./Spacer";

export const Main: React.FC = () => {
    let usp = [
        {
            title: "Research-based",
            text: "Our goal is to develop cutting-edge technology, straight from the neuroscience lab to you.",
        },
        {
            title: "Changing the mind the mind's way",
            text: "Changing your mind may not be easy, but with our VR solutions you can tap into the brain's implicit learning systems to effortlessly change your mind, for the better. ",
        },
        {
            title: "Improved self-knowledge",
            text: "You're in the driving seat. With our software, the goal isn't just to change your mind, but to reveal how the mind works to you. Showing how the magic works is part of the process.",
        },
    ];

    return (
        <>
            <div>
                <Header
                    className="main-header"
                    logo="/images/mother-white-m.png"
                    subHeader="Changing your mind for the better"
                />
                <div className="side-margin">
                    <div className="flex main">
                        <h2>We are Mother.</h2>
                        <p>
                            A Swedish medtech company developing easily
                            accessible, scalable, digital therapeutics with
                            effects comparable to pharmaceuticals, but without
                            their risks.
                        </p>
                        <p>
                            Currently we are focused on virtual reality (VR) due
                            to its powerful psychological effects, and we
                            anticipate a future of transformative VR
                            experiences. We have deep expertise in extended
                            reality and applied neuroscience, and strive to be
                            at the forefront of these exciting developments for
                            mental health.
                        </p>
                    </div>
                    <Spacer height="50px" />
                    <div className="flex main">
                        <h2 id="sick-of-smoking">Sick of smoking</h2>
                        <p>
                            Our first solution targets the single biggest health
                            issue in the world - smoking. We offer a highly
                            effective VR solution that uses a powerful
                            biological mechanism to help end tobacco addiction
                            in as little as a few five minute treatments.
                        </p>
                        <p>It is cost-effective, safe and effortless.</p>
                        <Spacer height="50px" />
                        <PanelTestimonial
                            text="I tried smoking twice and felt sick. I feel disgusted when someone smokes next to me."
                            name="Camille, smoke-free after 3 treatments"
                            img="/images/camille.png"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                        <PanelTestimonial
                            text="I totally lost the taste for cigarettes. I can’t stand them."
                            name="Erik after 1 treatment"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                        <PanelTestimonial
                            text="It tastes disgusting when I smoke now, not the same as before."
                            name="Daniel after 1 treatment"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                        <PanelTestimonial
                            text="I have not had any cravings whatsoever during the days since the last session."
                            name="Carl after 3 treatments"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                        <PanelTestimonial
                            text="This was the first time in 40 years that I have not smoked for 24 hours."
                            name="Anna after 1 treatment"
                            color="dark-blue"
                        />
                    </div>
                    <Spacer height="200px" hasLine={true} />
                    <div className="flex main">
                        <h2 id="our-dna">Our DNA</h2>
                        <p>
                            We aim to become a portfolio company, by creating
                            impactful solutions that help society and humanity
                            to become healthier. Sick of Smoking is our first
                            solution, there are many more to come.
                        </p>
                        <Spacer height="50px" />
                        <USPList usp={usp} />
                    </div>
                    <Spacer height="200px" hasLine={true} />
                    <div className="flex main">
                        <h2 id="news">News</h2>
                        <p>
                            If you find the above inspiring and would like to
                            know more, follow us on{" "}
                            <a href="https://www.linkedin.com/company/mothertechnology">
                                LinkedIn
                            </a>{" "}
                            where we link to inspiring news, papers and reports.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
