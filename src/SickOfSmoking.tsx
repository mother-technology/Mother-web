/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { NewsList } from "./NewsList";
import { PanelTestimonial } from "./PanelTestimonial";
import "./Shared.css";
import { Spacer } from "./Spacer";
import { USPList } from "./USPList";


export const SickOfSmoking: React.FC = () => {
    let tips = [
        {
            title: "1. Virtual onboarding",
            text: "Your first step is to meet our virtual Dr. Freedman, who will introduce you to the program and guide you to a smoke-free life.",
        },
        {
            title: "2. Long-lasting aversion",
            text: "Secondly we create a long-lasting aversion against tobacco, which is done with our unique conditioning procedure.",
        },
        {
            title: "3. Coaching and mindfulness",
            text: "Then you take part of our tailor-made guided coaching course, breathing exercises and mindfulness programs, to maximise your chances of successfully quitting without relapse.",
        },
    ];

    let screendumps = [
        {
            alt: "Sick of smoking - interior view",
            image:"/images/sos1.png",
        },
        {
            alt: "Sick of smoking - exterior view",
            image:"/images/sos2.png",
        },
    ];

    return (
        <div>
            <Header
                className="main-header"
                logo="/images/sos.png"
                header="Making quitting easy"
            />
            <Spacer height="40px" />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We offer a safe, effective and innovative VR solution - Sick of Smoking -  
                        based on a powerful biological mechanism that helps you
                        end tobacco addiction with just a few short treatments.
                    </p>
                    <Spacer height="20px" />
                    <a className="buttonLink" href="https://bit.ly/sos-beta-invite">
                        Sign me up!
                    </a>
                    <Spacer height="20px" />
                    <p>The process to become smoke free is ideally done in  a week, with 5 min exercises that you do daily in VR. You can modify the process at your own convenience or repeat exercises how many times you want. They are all available to you in VR.</p>
                    <Spacer height="40px" />
                    <USPList usp={tips} />
                    <Spacer height="40px" />
                    <NewsList news={screendumps} />
                    <Spacer height="200px" hasLine={true} />
                    <h2 id="testimonials">Testimonials</h2>
                    <p>
                        Our participants have given us great feedback so far and
                        we clearly see how we change the taste of tobacco for
                        them, making it much easier than before to lead a
                        smoke-free life.
                    </p>
                    <Spacer height="30px" />
                    <PanelTestimonial
                        text="I tried smoking twice and felt sick. I feel disgusted when someone smokes next to me."
                        name="Camille, still smoke-free after four months"
                        img="/images/camille.png"
                        color="dark-blue"
                    />
                    <Spacer height="20px" />
                    <PanelTestimonial
                        text="Before when I tried to quit, it still tasted good when I smoked a cigarette, but [Sick of Smoking] made it so that I have an extreme distaste for cigarettes.
                        It was so easy to abstain and quit unlike other times."
                        name="Jonna, still smoke-free after two months"
                        color="dark-blue"
                    />
                    <Spacer height="20px" />
                    <PanelTestimonial
                        text="Initially, restless and every craving was accompanied by nausea. Now, I rarely think of smoking and when I do, I think about the treatment and how lucky I was to get the chance."
                        name="Annie, still smoke-free after two months"
                        color="dark-blue"
                    />
                    <Spacer height="20px" />
                    <PanelTestimonial
                        text="I have not had any cravings whatsoever during the days since the last session."
                        name="Carl, still smoke-free after two months"
                        color="dark-blue"
                    />
                    <Spacer height="20px" />
                    <PanelTestimonial
                        text="Before I have managed to quit smoking for periods of time with just willpower. Then I always had an urge to smoke for a long time. After your procedure, I have not had the urge at all."
                        name="Catharine, still smoke-free after two months"
                        color="dark-blue"
                    />
                </div>

                <div className="flex main">
                    <Spacer height="200px" hasLine={true} />
                    <h2 id="would-you-like-to-take-part">
                        Would you like to take part?
                    </h2>
                    <p>
                        We are opening up a few spots in an exclusive closed
                        beta trial. It is a digital program that you can do from
                        home with the use of your own VR headset.
                    </p>
                    <p>
                        This is a free beta test for us to gather feedback to
                        help us develop our product.
                    </p>
                    <p>
                        Sign up here and maybe you will be selected. We are
                        happy to receive your application. Let's start the new
                        year by becoming tobacco free! If you have any questions, feel free to <a href="mailto:info@mother.technology">email us</a>.
                    </p>
                    <Spacer height="20px" />
                    <a
                        className="buttonLink"
                        href="https://bit.ly/sos-beta-invite"
                    >
                        Sign me up!
                    </a>
                    <Spacer height="80px" />
                </div>
            </div>
        </div>
    );
};
