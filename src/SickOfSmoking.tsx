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
            title: "Daily practise",
            text: "Best to practise straight after waking, directly after exercise, and just before sleep.",
        },
        {
            title: "Calm environment",
            text: "Practise in a calm, comfortable environment without distractions. If you feel dizzy, take a moment to rest after pracise. The vagus is a very large nerve, activating it repeatedly is relaxing, but also requires effort and might tire you out at first.",
        },
        {
            title: "Relax your muscles",
            text: "Relax your muscles as you breath out. Try to 'will' the dot to slow down as you breath out.",
        },
        {
            title: "Let go of the app",
            text: "As you recognise the sensation of activating your vagus, practise its activation also without the app.",
        },
        {
            title: "Training pays off",
            text: "Consistent daily practise over around one month is approximately the length of time needed to see developments in control of the vagus. Even short, minute long sessions, will have a strong cumulative effect if done daily.",
        },
    ];

    return (
        <div>
            <Header
                className="main-header"
                header="Time to get a smoke-free life"
            />
            <Spacer height="40px" />
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
                    <h2>A brief background</h2>
                    <p>
                        The{" "}
                        <a href="https://simple.wikipedia.org/wiki/Autonomic_nervous_system">
                            autonomic nervous system (ANS)
                        </a>{" "}
                        controls your background processes, such as digestion, heart
                        rate, salivation and breathing. You largely can't consciously
                        affect these processes, with breathing as an important
                        exception. It also controls your anxiety state, with two
                        opposing forces, the SNS and PNS.
                    </p>

                    <p>
                        The{" "}
                        <a href="https://simple.wikipedia.org/wiki/Sympathetic_nervous_system">
                            sympathetic nervous system (SNS)
                        </a>{" "}
                        activates the{" "}
                        <a href="https://en.wikipedia.org/wiki/Fight-or-flight_response">
                            Flight or Fright response
                        </a>{" "}
                        state, preparing the body for action. The lungs open up,
                        heart-rate increases, digestion is put on hold, the pupils
                        dilate.
                    </p>
                    <p>
                        The{" "}
                        <a href="https://simple.wikipedia.org/wiki/Parasympathetic_nervous_system">
                            parasympathetic nervous system (PNS)
                        </a>{" "}
                        brings you towards the 'Rest and Digest' state. The body
                        relaxes, breathing and heart rate slow down, and blood is
                        directed towards the digestive system.
                    </p>
                    <h4>The PNS is largely controlled by the vagus nerve.</h4>
                    <p>
                        The main power behind the relaxing PNS force, the vagus relaxes
                        your muscles, slows your heart and calms you down. Stimulate
                        your vagus by holding your breath for around 30 seconds, dipping
                        your face in cold water, coughing, or our favourite,{" "}
                        <a href="https://pubmed.ncbi.nlm.nih.gov/31331560/">hopping in the sauna</a>.
                    </p>
                    <h4>
                        Each time the vagus is stimulated, your heart pauses, changing
                        your heart rate variability.
                    </h4>
                    <p>
                        Your heart doesn't beat as regularly as a metronome. Every beat
                        is a little different, this difference is your{" "}
                        <a href="https://en.wikipedia.org/wiki/Heart_rate_variability">
                            heart rate variability (HRV)
                        </a>.
                    </p>
                    <h4>Low HRV.</h4>
                    <img src="./images/hrv-low.png" />
                    <p>
                        The differences can be low, when your SNS has hit the 'Fight or
                        Flight' alarm and your heart kicks into high gear. Then the
                        beats come regularly, like{" "}
                        <a href="https://soundcloud.com/listentobec/energy">techno</a>.
                        Your heart is ready for an emergency.
                    </p>
                    <h4>High HRV.</h4>
                    <img src="./images/hrv-high.png" />
                    <p>
                        The differences can be high, when your PNS is dominant, and your
                        heart is recuperating. It slows down its beats, and they come at
                        irregular intervals, like{" "}
                        <a href="https://www.youtube.com/watch?v=JjFQcV-BruU">jazz</a>.
                        Your heart is relaxing and playfully building resilience for
                        future crises.
                    </p>
                    <p>
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6048243/">
                            CVC
                        </a>{" "}
                        indicates how well controlled your heart is by your vagus. A
                        high value indicates a responsive, sensitive and rapidly
                        changing system and correlates with good health, positive
                        emotions, effective executive function and overall better
                        self-regulation. Think of it as a measure of how much emotional
                        unflappability you have in reserve.
                    </p>
                    <Spacer height="200px" hasLine={true} />
                    <USPList usp={tips} />
                </div>
            </div>
            <Spacer height="80px" />
        </div>
        
    );
};
