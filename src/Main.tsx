/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { NewsList } from "./NewsList";
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

    let news = [
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7066722829810941952",
            alt: "Linkedin post: Bjorn meeting Dalai Lama",
            image: "/images/linkedin-12.png",
        },
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7061763511999209474",
            alt: "Linkedin post: Sick of smoking invited to tobacco and health conference ECTOH",
            image: "/images/linkedin-11.png",
        },
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7039224567659118592",
            alt: "Linkedin post: Celebrating international woman's day",
            image: "/images/linkedin-10.png",
        },
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7021876503164403712",
            alt: "Linkedin post: Sting Demo Day",
            image: "/images/linkedin-9.png",
        },
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7029476406635958272",
            alt: "Linkedin post: Featured in Kearney's future healthcare outlook",
            image: "/images/linkedin-8.png",
        },
        {
            href: "https://www.linkedin.com/feed/update/urn:li:activity:7031555464601427968",
            alt: "Linkedin post: All you need is love - and preseed investment",
            image: "/images/linkedin-7.png",
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
                            Our first solution - Sick of Smoking - targets the
                            single biggest health issue in the world - smoking.
                            We offer a highly effective VR solution that uses a
                            powerful biological mechanism to help end tobacco
                            addiction in a few five minute treatments.{" "}
                        </p>
                        <p>It is cost-effective, safe and effortless.</p>

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
                    <NewsList news={news} />
                </div>
                <Spacer height="80px" />
            </div>
        </>
    );
};
