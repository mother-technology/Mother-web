import React from "react";
import { Header } from "./Header";
import "./Privacy.css";
import "./Shared.css";

export const VR: React.FC = () => {
    return (
        <div>
            <Header className="vr-header" header="A mental health revolution" />
            <div className="side-margin">
                <div className="flex main">
                    <h2>Areas within health for VR</h2>
                    <p>
                        Charts with where VR is mostly used (education, pain
                        relief etc)
                    </p>
                    <h2>What is happening within research</h2>
                    <p>Link to reports - maybe use the panel</p>
                    <p>
                        We believe the trends in neuroscience are revealing
                        hidden aspects of the brain, that VR will emerge as a
                        powerful vector for impacting the brain, and that we are
                        approaching a new dawn for digital mental health
                        therapeutics - and we aim to be the vanguard of these
                        developments.
                    </p>
                    <img
                        src="/images/VR-headset.png"
                        alt="person wearing a VR headset"
                    ></img>
                    <p>
                        The slew of literature recently published in the area of
                        VR and neuroscience underlines the huge potential for VR
                        as a mental health tool. Our team has a deep
                        understanding of the mechanism-of-action, and we are
                        fired up about leading developments in this exciting
                        area.
                    </p>
                    <p>
                        If you find the above inspiring and would like to know
                        more, follow us on{" "}
                        <a href="https://www.linkedin.com/company/mothertechnology">
                            LinkedIn
                        </a>{" "}
                        where we frequently link to inspiring news, papers and
                        reports.
                    </p>
                </div>
            </div>
        </div>
    );
};
