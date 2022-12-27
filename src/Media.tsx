/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { MediaTabs } from "./MediaTabs";
import { Spacer } from "./Spacer";
import "./Media.css";
import "./Shared.css";

export const Media: React.FC = () => {
    return (
        <>
            <Header className="media-header" header="Media" />
            <Spacer height="40px" />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We have exciting stories about our research and the area
                        of VR usage for health tech in general and will gladly
                        share them with you. Contact us to start a conversation!
                    </p>
                    <Spacer height="50px" />
                    <h2 id="contact-us">Contact us</h2>
                    <p>
                        Send us an{" "}
                        <a href="mailto:press@mother.technology">email</a> or
                        reach us over phone,{" "}
                        <a href="tel:0046738150102">073-8150102</a>. We are
                        experts on the brain's visual perspection and how it is
                        affected by VR.
                    </p>
                    <p>
                        If you are interested in the news and research we share
                        in the area, follow us on{" "}
                        <a href="https://www.linkedin.com/company/mothertechnology">
                            LinkedIn
                        </a>.
                    </p>
                    <Spacer height="50px" />
                    <h2 id="about-us">About us</h2>
                    <p>
                        We are a Stockholm-based health company, filling the
                        niche between conventional health services and self-help
                        approaches by translating cutting edge neuroscience into
                        easily accessible digital therapeutics.
                    </p>
                </div>
                <Spacer height="50px" />
                <MediaTabs />
            </div>
            <Spacer height="80px" />
        </>
    );
};
