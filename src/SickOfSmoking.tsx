/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { PanelTestimonial } from "./PanelTestimonial";
import "./Shared.css";
import { Spacer } from "./Spacer";
import { USPList } from "./USPList";

export const SickOfSmoking: React.FC = () => {

    let tips = [
        {
            title: "1. Virtual onboarding",
            text: "Your first step is to meet Dr. Freedman, who will introduce you to the software and guide you to a smoke-free life.",
        },
        {
            title: "2. Long-lasting aversion",
            text: "Secondly we create a long-lasting aversion against the tobacco taste of your choice, which is done with our patent-pending conditioning procedure.",
        },
        {
            title: "3. Coaching and mindfulness",
            text: "Then we have our tailor-made guided coaching course, breathing exercises and mindfulness programs, to maximise your chances of succesfully quitting and avoiding relapse.",
        },
     ];

    return (
        <div>
            <Header
                className="main-header"
                header="Making quitting easy."
            />
            <Spacer height="40px" />
            <div className="side-margin">
                <div className="flex main">
                    <p>We offer a sensational VR solution that uses a powerful
                            biological mechanism to help end tobacco addiction
                            with a few five minute treatments.</p>
                    <Spacer height="40px" />
                    <USPList usp={tips} />                    
                    <Spacer height="200px" hasLine={true} />
                        <h2 id="testimonials">Testimonials</h2>
                        <Spacer height="30px" />
                        <PanelTestimonial
                            text="I tried smoking twice and felt sick. I feel disgusted when someone smokes next to me."
                            name="Camille, smoke-free after 2 treatments"
                            img="/images/camille.png"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                        <PanelTestimonial
                            text="Before when I tried to quit, it still tasted good when I smoked a cigarette, but [Sick of Smoking] made it so that I have an extreme distaste for cigarettes.
                        It was so easy to abstain and quit unlike other times."
                            name="Jonna after 2 treatment"
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
                    
                <div className="flex main">
                    <Spacer height="200px" hasLine={true} />
                    <h2 id="would-you-like-to-take-part">Would you like to take part?</h2>
                    <p>
                        Sign up now for a chance to access our beta and be amongst the first to use {" "}
                        <a href="https://bit.ly/sos-beta-invite">
                           Sick of Smoking
                        </a>{" "}
                        .
                    </p>
                    
                    <Spacer height="80px" />
                </div>
            </div>
        </div>
        
    );
};
