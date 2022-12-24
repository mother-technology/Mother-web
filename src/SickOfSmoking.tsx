/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ABriefBackground } from "./ABriefBackground";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { PanelTestimonial } from "./PanelTestimonial";
import { PanelTextImageDL } from "./PanelTextImageDL";
import { TipsAndTricks } from "./TipsAndTricks";
import { Spacer } from "./Spacer";
import "./Shared.css";

export const SickOfSmoking: React.FC = () => {
    return (
        <div>
            <Header
                className="main-header"
                header="Time to get a smoke-free life"
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>Change your brain to detest cigarettes.</p>
                   <Spacer height="50px" />
                        <PanelTestimonial
                            text="Before when I tried to quit it still tasted good when I smoked a cigarette, but this has made it so that I have an extreme distaste for cigarettes, it was so easy to abstain and quit unlike other times."
                            name="Eva, smoke-free after 3 treatments"
                            img="/images/camille.png"
                            color="dark-blue"
                        />
                        <Spacer height="20px" />
                    <p>
                        SoS utilises the{" "}
                        <a href="https://en.wikipedia.org/wiki/Garcia_effect">
                            Garcia effect
                        </a>{" "}
                        to train your brain to dislike the taste and smell of your cigarettes, or vape, or snus...
                    </p>
                    <p>
                        SoS is a complete tobacco cessation package, not only with our patent-pending taste aversion treatment, but also a tailor-made guided virtual coaching course that will teach you why you smoke, how to handle your cravings and guide you to a tobacco free-life.
                    </p>
                </div>
                <Spacer height="50px" />
                <div className="panels">
                    <Panel
                        header="The goal"
                        backgroundColor="black"
                        img="/images/the-target.png"
                    >
                        <>
                            <p>
                                Tobacco contains nicotine, and nicotine has been shown to be more difficult to quit than cocaine or heroin. Even though the vast majority of smokers want to quit, only 7% manage without help.
                            </p>
                            <p>
                             Relapse from quitting is also a common outcome, as cravings for tobacco can contiue for years after ending consumption.{" "}
                            </p>
                            <p>So how do we walk away from such a poisonous habit without help?</p>
                        </>
                    </Panel>
                    <Panel
                        header="The magic"
                        backgroundColor="black"
                        img="/images/the-magic.png"
                    >
                        <>
                            <p>
                                Making quitting easy is our goal, and with SoS we use a powerful biological mechanism to not only change the taste and smell of cigarettes, making them repulsive, but also that decreases cravings and makes even the thought of smoking unappealing.{" "}
                            </p>
                            <p>
                                All this, with just a few five-minute sessions.{" "}
                            </p>
                        </>
                    </Panel>
                    <Panel
                        header="The time"
                        backgroundColor="black"
                        img="/images/the-time.png"
                    >
                        <>
                            <p>
                               Breaking the habits of a lifetime does take some time, and to help you to get to your tobacco free life, we have our clever digital coach, Dr. Freedman.
                            </p>
                            <p>
                                Dr. Freedman will guide you on a customised coaching session to teach you the hacks, tips and tricks that will allow you to succesfully navigate your way to a life where the only emotion tobacco gives you, is digust.
                            </p>
                        </>

                    </Panel>
                </div>
                <div className="flex main">
                    <Spacer height="200px" hasLine={true} />
                    <ABriefBackground />
                    <Spacer height="200px" hasLine={true} />
                    <TipsAndTricks />
                </div>
            </div>
        </div>
    );
};
