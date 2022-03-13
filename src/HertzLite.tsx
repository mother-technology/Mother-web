/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { ABriefBackground } from "./ABriefBackground";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { PanelTextImageDL } from "./PanelTextImageDL";
import "./Shared.css";
import { TipsAndTricks } from "./TipsAndTricks";

export const HertzLite: React.FC = () => {
    return (
        <div>
            <Header
                className="main-header"
                header="Sync your practice with millions!"
                subHeader="(Potentially...)"
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        Hertz-lite. has two components, one for breathing and
                        one for focus, coaching you to breath in a way which
                        stimulates your{" "}
                        <a href="https://www.thecut.com/2019/05/i-now-suspect-the-vagus-nerve-is-the-key-to-well-being.html">
                            vagus nerve
                        </a>{" "}
                        , as you would with a meditative breathing exercise, or
                        with activities such as{" "}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6189422/">
                            yoga
                        </a>{" "}
                        .{" "}
                    </p>
                    <p>
                        Our app coaches you to stimulate your vagus, directly
                        reducing anxiety. This will tone your vagus, building
                        resilience to future stress. With regular practise, you
                        will increase your CVC, deepening your emotional
                        reserves.
                    </p>
                    <div className="panel-sell-items">
                        <PanelTextImageDL
                            header="Hertz lite."
                            img="/images/hz-lite-square.png"
                            buttonText="DOWNLOAD NOW"
                            buttonLink="https://apps.apple.com/us/app/hertz-lite-anxiety-relief/id1543873699"
                        >
                            <>
                                <p className="small">
                                    Free, no strings attached, but some
                                    dedication required.
                                </p>
                            </>
                        </PanelTextImageDL>
                    </div>
                </div>

                <div className="panels">
                    <Panel
                        header="The difference."
                        backgroundColor="pink"
                        img="/images/the-difference.png"
                    >
                        <>
                            <p className="small">
                                With Hertz. we developed a novel biofeedback
                                mechanism that turbocharges your practise,
                                developing powerful vagus nerve control and
                                offering a new means of controlling anxiety.
                            </p>
                            <p className="small">
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
                            <p className="small">
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
                            <p className="small">
                                Will it make any difference to you to do your
                                practise in perfect unison with others, all
                                around the world?{" "}
                            </p>
                            <p className="small">
                                Our yoga teacher certainly seems to think so,
                                and there's only one way to find out.
                            </p>
                        </>
                    </Panel>
                </div>
                <div className="flex main">
                    <div className="separator" />
                    <ABriefBackground />
                    <div className="separator" />
                    <TipsAndTricks />
                </div>
            </div>
        </div>
    );
};