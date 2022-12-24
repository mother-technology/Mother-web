/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ABriefBackground } from "./ABriefBackground";
import { Header } from "./Header";
import { Panel } from "./Panel";
import "./Shared.css";
import { TipsAndTricks } from "./TipsAndTricks";
import { Spacer } from "./Spacer";

export const HertzLite: React.FC = () => {
    return (
        <div>
            <Header
                className="main-header"
                header="Sync your practice with millions!"
            />
            <Spacer height="40px" />
            <div className="side-margin">
                <div className="flex main">
                    <div>
                        <p>
                        Free, no strings attached, but some dedication required. Hertz-lite. has two components, one for breathing and
                        one for focus, coaching you to breath in a way which
                        stimulates your{" "}
                        <a href="https://www.thecut.com/2019/05/i-now-suspect-the-vagus-nerve-is-the-key-to-well-being.html">
                            vagus nerve
                        </a>, as you would with a meditative breathing exercise, or
                        with activities such as{" "}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6189422/">yoga</a>{" "}.
                        </p>
                        <Spacer height="30px" />
                        <a className="buttonLink" href="https://apps.apple.com/us/app/hertz-lite-anxiety-relief/id1543873699">
                            Download now!
                        </a>
                        <Spacer height="30px" />
                    </div>
                </div>
                <div className="flex main">
                    <p>
                        Our app coaches you to stimulate your vagus, directly
                        reducing anxiety. This will tone your vagus, building
                        resilience to future stress. With regular practise, you
                        will increase your CVC, deepening your emotional
                        reserves.
                    </p>
                </div>
                <Spacer height="50px" />
                <div className="panels">
                    <Panel
                        header="The difference."
                        backgroundColor="pink"
                        img="/images/the-difference.png"
                    >
                        <>
                            <p>
                                With Hertz. we developed a novel biofeedback
                                mechanism that turbocharges your practise,
                                developing powerful vagus nerve control and
                                offering a new means of controlling anxiety.
                            </p>
                            <p>
                                With Hertz-lite. we removed the biofeedback,
                                replacing it with a standardised feedback.
                            </p>
                        </>
                    </Panel>
                    <Panel
                        header="The payoff."
                        backgroundColor="yellow"
                        img="/images/the-payoff.png"
                    >
                        <>
                            <p>
                                For our networked world we need connected tools.
                                Hertz-lite. connects to a global timing server,
                                so that when you start your practise, you do it
                                in sync with every other connected user.
                            </p>
                        </>
                    </Panel>
                    <Panel
                        header="The magic"
                        backgroundColor="black"
                        img="/images/the-magic.png"
                    >
                        <>
                            <p>
                                Will it make any difference to you to do your
                                practise in perfect unison with others, all
                                around the world?{" "}
                            </p>
                            <p>
                                Our yoga teacher certainly seems to think so,
                                and there's only one way to find out.
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
            <Spacer height="80px" />
        </div>
    );
};
