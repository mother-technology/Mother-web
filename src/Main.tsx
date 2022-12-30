/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { PanelTestimonial } from "./PanelTestimonial";
import "./SickOfSmoking.css";
import "./Shared.css";
import "./Main.css";
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
                    header="Changing your mind for the better"
                />
                <Spacer height="80px" />
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
                        <h2 id="our-products">Our products</h2>
                        <p>
                            We aim to become a portfolio company, by creating
                            impactful solutions that help society and humanity
                            to become healthier. 
                        </p>
                        <p>
                            Our first solution - Sick of Smoking - targets the single biggest health
                            issue in the world - smoking. We offer a highly
                            effective VR solution that uses a powerful
                            biological mechanism to help end tobacco addiction
                            in a few five minute treatments. </p>
                        <p>
                            It is cost-effective, safe and effortless.</p>
                        
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
                     <div className="flex news-images">
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7009515098977251328"><img alt="Linkedin post: It has been so easy to quit this time" src="/images/linkedin_2.png" /></a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7005869347252396032"><img alt="Linkedin post: Interesting VR focused on health tech" src="/images/linkedin_1.png" /></a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7002939543872024576"><img alt="Linkedin post: EU working for a tobacco-free generation 2040" src="/images/linkedin_3.png" /></a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:7000481434213736448"><img alt="Linkedin post: One of the hottest Swedish health tech startups" src="/images/linkedin_5.png" /></a>
                        <a href="https://www.linkedin.com/feed/update/urn:li:activity:6995765239338156032"><img alt="Linkedin post: introducing Mother" src="/images/linkedin_4.png" /></a>    
                    </div>
                </div>
                <Spacer height="80px" />
            </div>
        </>
    );
};
