import React from "react";
import "./Shared.css";
import "./Privacy.css";
import "./Footer.css";
import { Footer } from "./Footer";


export const Privacy: React.FC = () => {
    return (
        <div>
          <div className="header privacy-header">
            <div className="overlay"></div>
            <div className="ingress">
              <h1 className="white">Walls have ears.</h1>
              <p>We have strong views on privacy when it comes to our own data, and treat it with the pretty good encryption it deserves.
              </p>
            </div>
          </div>

          <div className="main">
            <h2>And we promise to treat your data equally carefully.
            </h2>
            <p>
                  If you decide to 'Send us your data', you can rest assured that we keep it as safe, and anonymous as possible. We don't wish to be the kind of company that treats customer data as a primary source of income. At Mother. we would prefer to make our money delivering novel and powerful mental health tools, and so we promise to never exploit your data.
            </p>
            <p>
              If you decide to send us your data, we promise to use it only to improve our services, to study how effective our tools are and to develop them further.
            </p>
            <img src="./images/privacy-data.png" width="300" className="one" />
            <p>
            To us, you data-sharing guys are little dots in graphs that look like this.
            </p>
            <p>
            Thanks little dots!
            </p>
            <p>
            If you want to know more, mail our <a href="mailto:dpo@csd.red">DPO</a>.
            </p>
            <Footer />
          </div>
        </div>
    );
};
