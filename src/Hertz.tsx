/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ABriefBackground } from "./ABriefBackground";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { PanelTextImageDL } from "./PanelTextImageDL";
import "./Shared.css";
import { TipsAndTricks } from "./TipsAndTricks";
import { Spacer } from "./Spacer";

export const Hertz: React.FC = () => {
    return (
        <div>
            <Header
                className="main-header"
                header="A recharge button,"
                subHeader="for your wrist."
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>Use your brain to understand your body.</p>
                    <Spacer height="50px" />
                    <div className="panel-sell-items">
                        <PanelTextImageDL
                            header="Hertz."
                            img="/images/hz-square.png"
                            buttonText="DOWNLOAD NOW"
                            buttonLink="https://apps.apple.com/us/app/hertz-an-anxiety-treatment/id1529146685"
                        >
                            <>
                                <p>
                                    Anxiety is the single most common mental
                                    health issue in the world.
                                </p>
                                <p> It doesn’t have to be.</p>
                            </>
                        </PanelTextImageDL>
                    </div>
                    <Spacer height="50px" />
                    <p>
                        Hertz. provides{" "}
                        <a href="https://en.wikipedia.org/wiki/Biofeedback">
                            biofeedback
                        </a>{" "}
                        from your{" "}
                        <a href="https://www.thecut.com/2019/05/i-now-suspect-the-vagus-nerve-is-the-key-to-well-being.html">
                            vagus nerve
                        </a>{" "}
                        to your brain. It has two components, one for breathing
                        and one for focus.
                    </p>
                    <p>
                        Hertz. coaches you to breath in a way which stimulates
                        your vagus nerve, as you would with a meditative
                        breathing exercise, or with activities such as{" "}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6189422/">
                            yoga
                        </a>
                        . This will tone your vagus, building resilience to
                        future stress. Over time the biofeedback will set up a
                        connection between your conscious breath control and the
                        vagal nerve stimulation, increasing your CVC and
                        developing within yourself a powerful ability to
                        consciously relax.
                    </p>
                </div>
                <Spacer height="50px" />
                <div className="panels">
                    <Panel
                        header="The target"
                        backgroundColor="black"
                        img="/images/the-target.png"
                    >
                        <>
                            <p>
                                Regular stimulation of your vagus nerve
                                increases your HRV (heart rate variability) as
                                well as your CVC (cardiac vagal control), which
                                reflects how well you can regulate your anxiety,
                                the quality of your sleep, your digestion, your
                                mood… the list goes on.
                            </p>
                            <p>
                                With a steady diet of deep breathing, yoga and
                                meditation, you’ll have vagal nerve control a
                                Buddhist monk would kill for.{" "}
                            </p>
                            <p>But who has that kind of time?</p>
                        </>
                    </Panel>
                    <Panel
                        header="The time"
                        backgroundColor="black"
                        img="/images/the-time.png"
                    >
                        <>
                            <p>
                                For a smart world we need smart tools. Hertz.
                                pairs a simple HRV training routine (breath in,
                                breath out) with a saccadic gaze control
                                exercise (focus on the red dot).{" "}
                            </p>
                            <p>
                                The changes in your HRV are used as feedback to
                                modulate the speed of the dot. Breathing out,
                                your heart skips a beat, and the dot slows down.{" "}
                            </p>
                            <p>Or was it the other way around?</p>
                        </>
                    </Panel>
                    <Panel
                        header="The magic"
                        backgroundColor="black"
                        img="/images/the-magic.png"
                    >
                        <>
                            <p>
                                Tying your vagal nerve stimulation to a target
                                that gives direct feedback allows you to take a
                                break, and gives your basal ganglia (your
                                brain's dedicated hardware for implicit
                                associative learning) something to do.
                            </p>
                            <p>
                                With Hertz. they cumulate the effort you put in,
                                giving you a toned vagus nerve, strengthening
                                your CVC, boosting your HRV and relieving your
                                anxiety.
                            </p>
                        </>
                    </Panel>
                </div>
                <div className="flex main">
                    <Spacer height="100px" />
                    <ABriefBackground />
                    <Spacer height="100px" />
                    <TipsAndTricks />
                </div>
            </div>
        </div>
    );
};
