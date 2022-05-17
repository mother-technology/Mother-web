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
                        Good morning. We'd love if you would like to write
                        something about our software or talk to us about it.
                        Want to know more?{" "}
                        <a href="mailto:press@mother.technology">Mail us</a>.
                    </p>
                    <p>
                        Like to download all high resolution pictures in one go?
                        Here are the{" "}
                        <a href="./images/media.zip">product pictures</a> and{" "}
                        <a href="./images/team.zip">team pictures</a>. Or
                        replace the .png extension with jpg to see a high
                        resolution version.
                    </p>
                </div>
                <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <h2 id="team-pictures">Team pictures</h2>
                </div>

                <Spacer height="50px" />

                <div className="team">
                    <div className="media-item light-grey">
                        <img src="./images/team.png" />
                        <p className="image-text">
                            Team -{" "}
                            <a href="./images/team-original.png">
                                high resolution link
                            </a>
                        </p>
                    </div>

                    <div className="media-item light-grey">
                        <img src="./images/team-composite.png" />
                        <p className="image-text">
                            Team -{" "}
                            <a href="./images/team-composite.png">
                                high resolution link
                            </a>
                        </p>
                    </div>

                    <div className="media-item light-grey">
                        <img src="./images/team-horizontal.png" />
                        <p className="image-text">
                            Team{" "}
                            <a href="./images/team-horizontal.png">
                                high resolution link
                            </a>
                        </p>
                    </div>
                </div>

                <Spacer height="200px" hasLine={true} />
                <div className="flex main">
                    <h2 id="product-pictures">Product pictures</h2>
                    <p>
                        Here's a zip with{" "}
                        <a href="./images/media.zip">higher resolution</a>{" "}
                        versions of the images below. Or replace the .png
                        extension with jpg to see a high res version.
                    </p>
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
                    <div className="media-item light-grey">
                        <img src="./images/hertz-lite-interface.png" />
                        <p className="image-text">
                            Hertz. interface -{" "}
                            <a href="./images/hertz-lite-interface.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-1.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-1.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-3.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-3.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-5.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-5.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-6.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-6.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-4.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-4.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                    <div className="media-item light-grey">
                        <img src="./images/hz-action-2.png" />
                        <p className="image-text">
                            Hertz. in use -{" "}
                            <a href="./images/hz-action-2.jpg">
                                high resolution link
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
