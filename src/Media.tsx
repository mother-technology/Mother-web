/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./Media.css";
import { Header } from "./Header";

export const Media: React.FC = () => {
  return (
    <>
      <Header
        className="main-header"
        header="Media"
        subHeader="Product and team images"
      />
      <div className="side-margin">
        <div className="flex main">
          <p>
            Good morning. We'd love if you would like to write something about
            our software or talk to us about it. Want to know more?{" "}
            <a href="mailto:press@mother.technology">Mail us</a>.
          </p>
        </div>
        <div className="flex main">
          <h2 id="other-products">Other products</h2>
          <p>
            Here's a zip with <a href="./images/media.zip">higher resolution</a>{" "}
            versions of the images below. Or replace the .png extension with jpg
            to see a high res version.
          </p>
        </div>
        <div className="media">
          <div className="media-item light-grey">
            <img src="./images/hertz-interface.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              interface. <a href="./images/hertz-interface.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hertz-lite-interface.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              interface.{" "}
              <a href="./images/hertz-lite-interface.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-1.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-1.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-3.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-3.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-5.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-5.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-6.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-6.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-4.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-4.jpg">High res jpg</a>
            </p>
          </div>
          <div className="media-item light-grey">
            <img src="./images/hz-action-2.png" />
            <p className="image-text">
              <span>
                Hertz<span>.</span>
              </span>{" "}
              in use. <a href="./images/hz-action-2.jpg">High res jpg</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
