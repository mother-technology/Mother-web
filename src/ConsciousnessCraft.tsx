/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { CircleWithText } from "./CircleWithText";
import { Header } from "./Header";
import "./Shared.css";

export const ConsciousnessCraft: React.FC = () => {
    return (
        <div>
            <Header
                className="main-header"
                header="Consciousness craft"
                subHeader="Our big friendly guide to your brain."
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We live in an age where the stigma around mental health
                        is ebbing, where cutting-edge science is revealing the
                        secrets of the brain, where more and more people are
                        curious to know themselves, and what makes them tick. We
                        want to feed this development with Consciousness Craft,
                        a family of apps based on the latest neuroscience
                        research, which customises their content to your needs,
                        and which doesn't just show you which tools to use, but
                        how they work.
                    </p>
                    <img
                        src="/images/consciousness-craft.png"
                        style={{ margin: "20px 0px 80px 0" }}
                    />
                    <h2>How does it work?</h2>
                    <CircleWithText step="1" backgroundColor="yellow">
                        <>
                            <h2>Let's get to know you.</h2>
                            <p>
                                Are you wallowing in low self-esteem, and need a
                                self-confidence boost? Are you cracking under
                                constant, clawing anxiety, and need a
                                fight-or-flight reset? Or perhaps you feel fine
                                but wander aimlessly through a life that feels
                                purposeless? Our assessment rapidly homes in on
                                where you need to focus for maximum benefits.
                            </p>
                        </>
                    </CircleWithText>
                    <CircleWithText step="2" backgroundColor="yellow">
                        <>
                            <h2>
                                The difference between knowing and{" "}
                                <i>knowing</i>.
                            </h2>
                            <p>
                                Based on your psychological profile,
                                Consciousness Craft serves up a customised
                                resilience development program. These courses
                                are designed to not just preach what you ought
                                to do, but to allow you to peek behind the
                                wizard's curtain, to learn the deep why which
                                makes the actual doing so much easier.
                            </p>
                        </>
                    </CircleWithText>
                    <CircleWithText step="3" backgroundColor="yellow">
                        <>
                            <h2>
                                Bringing hard-science to the art of wellbeing.
                            </h2>
                            <p>
                                Measurement of change is the hallmark of
                                science, so Consciousness Craft will track your
                                progress as you learn to modify the neurological
                                traits which underlie the health of your brain.
                            </p>
                        </>
                    </CircleWithText>
                    {/* <h2>Our secret sauce.</h2>
          <p>
            We're a deep-tech, hard-science neuroscience company designing VR
            and biofeedback tools to change brain states causing long-term
            psychological changes. We're developing Consciousness Craft apps to
            have a go-to toolset that comprehensively covers the major factors
            affecting brain health.
          </p> */}
                </div>
            </div>
        </div>
    );
};
