/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Header } from "./Header";
import { Spacer } from "./Spacer";
import "./Media.css";
import "./Shared.css";

export const Media: React.FC = () => {
    return (
        <>
            <Header
                className="media-header"
                header="Media"
                subHeader="Product and team images"
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We have exciting stories about our research and the area
                        of VR usage for health tech in general and will gladly
                        share them with you. Contact us to start a conversation!
                    </p>
                    <h3>Contact us</h3>
                    <p>
                        Send us an{" "}
                        <a href="mailto:press@mother.technology">email</a> or
                        reach us over{" "}
                        <a href="tel:0046738150102">phone (073-8150102)</a>. We
                        are experts on the brain's visual perspection and how it
                        is affected by VR.
                    </p>
                    <p>
                        If you are interested in the news and research we share
                        in the area, follow us on{" "}
                        <a href="https://www.linkedin.com/company/mothertechnology">
                            LinkedIn
                        </a>{" "}
                        .
                    </p>

                    <h3>About us</h3>
                    <p>
                        We are a Stockholm-based health company, filling the
                        niche between conventional health services and self-help
                        approaches by translating cutting edge neuroscience into
                        easily accessible digital therapeutics.
                    </p>
                </div>
                {/* <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <h2 id="team-pictures">Team</h2>
                </div>
                <Spacer height="50px" />
                <div className="media">
                    <div className="media-item light-grey">
                        <img src="./images/hertz-interface.png" />
                        <p className="image-text">
                            Hertz. interface -{" "}
                            <a href="./images/hertz-interface.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                </div> */}

                {/* <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <h2 id="product-pictures">VR</h2>
                </div>
                <Spacer height="50px" />
                <div className="media">
                    <div className="media-item light-grey">
                        <img src="./images/hertz-interface.png" />
                        <p className="image-text">
                            Hertz. interface -{" "}
                            <a href="./images/hertz-interface.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                </div>

                <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <h2 id="product-pictures">Logos</h2>
                </div>
                <Spacer height="50px" />
                <div className="media">
                    <div className="media-item light-grey">
                        <img src="./images/hertz-interface.png" />
                        <p className="image-text">
                            Hertz. interface -{" "}
                            <a href="./images/hertz-interface.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                </div> */}

                {/* <h2>Press releases</h2>
                <h2>News clips</h2> */}
            </div>
        </>
    );
};
