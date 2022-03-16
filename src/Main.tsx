/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import "./Main.css";
import { Panel } from "./Panel";
import PanelTextImage from "./PanelTextImage";
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
            text: "Hard work is never easy, but with VR we can use the brains implicit learning systems to change your mind, for the better. ",
        },
        {
            title: "Synergistic impact",
            text: "Our VR software is designed to change your mind with one experience, and our Consciousness craft app aids you in maximising the benefit over time. ",
        },
        {
            title: "Improved self-knowledge",
            text: "You're in the driving seat. With our software, the goal isn't just to change your mind, but to reveal how the mind works to you. Showing how it works is part of the process.",
        },
    ];

    return (
        <>
            <div>
                <Header
                    className="main-header"
                    header="Mother."
                    subHeader="Changing minds"
                />
                <div className="side-margin">
                    <div className="flex main">
                        <p>
                            We are a Stockholm-based hard-science deep-tech
                            mental health company, filling the niche between
                            conventional health services and self-help
                            approaches by translating cutting edge neuroscience
                            into easily accessible digital therapeutics.
                        </p>
                        <p>
                            We create high-tech digital therapeutics based on
                            Virtual Reality, biofeedback, and guided mental
                            training courses.
                        </p>
                    </div>
                    <Spacer height="50px" />
                    <div className="panels">
                        <Panel
                            header="The brain"
                            backgroundColor="black"
                            img="/images/the-brain.png"
                        >
                            <>
                                <p>The Brain, home to us all! </p>
                                <p>
                                    Never has the research on our most thinky
                                    organ been so advanced, yet globally mental
                                    health plummets.{" "}
                                </p>
                                <p>
                                    Anxiety, burnout, depersonalisation,
                                    depression, and mood disorders are all too
                                    common, and amongst the youth they're on the
                                    rise. These mental health issues highlight
                                    the unhappy state of our brains.
                                </p>
                            </>
                        </Panel>
                        <Panel
                            header="The science"
                            backgroundColor="black"
                            img="/images/the-science.png"
                        >
                            <>
                                <p>
                                    In research labs across the world, using
                                    tools such as VR or psychedelics, in
                                    molecular biology labs, in fMRI studies, the
                                    cutting edge of science is revealing aspects
                                    of our brains which show us a clear path
                                    forward for brain health.
                                </p>
                                <p>
                                    From this and our own in-house research we
                                    develop novel digital therapeutics
                                    targetting the brain.
                                </p>
                            </>
                        </Panel>
                        <Panel
                            header="The target"
                            backgroundColor="black"
                            img="/images/the-target.png"
                        >
                            <>
                                <p>
                                    We aim to enable you to fully affirm your
                                    life, yourself, and your mode of
                                    functioning.{" "}
                                </p>
                                <p>
                                    We want your brain (and body) happily
                                    ticking along like a Swiss watch.{" "}
                                </p>
                                <p>
                                    We want you to feel like every day is the
                                    best day of your life, until tomorrow...
                                </p>
                                <p>
                                    And we want you to know who you are, where
                                    you want to go, and how to get there.
                                </p>
                            </>
                        </Panel>
                    </div>
                    <Spacer height="100px" />
                    <div className="flex main">
                        <USPList usp={usp} />
                    </div>
                    <Spacer height="100px" />
                    <div className="flex main">
                        <h2 id="vr">VR, the next revolution. </h2>
                        <p>
                            We believe the trends in neuroscience are revealing
                            hidden aspects of the brain, that VR will emerge as
                            a powerful vector for impacting the brain, and that
                            we are approaching a new dawn for digital mental
                            health therapeutics - and we aim to be the vanguard
                            of these developments.
                        </p>
                        <img
                            src="/images/VR-headset.png"
                            alt="person wearing a VR headset"
                        ></img>
                        <p>
                            The slew of literature recently published in the
                            area of VR and neuroscience underlines the huge
                            potential for VR as a mental health tool. Our team
                            has a deep understanding of the mechanism-of-action,
                            and we are fired up about leading developments in
                            this exciting area.
                        </p>
                    </div>
                    <Spacer height="100px" />
                    <div className="flex main">
                        <h2>Our other products</h2>
                        <p>
                            Our focus right now is on our VR technology,
                            although we have other mental training apps that you
                            can have a look at.
                        </p>
                    </div>
                    <Spacer height="50px" />
                    <div className="panel-text-images">
                        <PanelTextImage
                            header="You're not going to like our first app."
                            img="/images/hz-square.png"
                            hashId="hertz"
                            link="/hertz"
                            subHeader="But your brain will..."
                        />
                        <PanelTextImage
                            header="Free, no ads, no in-app purchases."
                            img="/images/hz-lite-square.png"
                            link="/hertz-lite"
                            hashId="hertz-lite"
                            subHeader="But it'll still make you pay."
                        />
                        <PanelTextImage
                            header="Our big friendly guide to your brain"
                            img="/images/cc-square.png"
                            link="/consciousness-craft"
                            hashId="consciousness-craft"
                            subHeader="Consciousness craft."
                        ></PanelTextImage>
                    </div>
                </div>
            </div>
        </>
    );
};

// header: string;
// img: string;
// link?: string;
// linkText?: string;
// buttonText?: string;
// buttonLink?: string;
// children: JSX.Element;
