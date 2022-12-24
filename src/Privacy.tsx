import React from "react";
import { Header } from "./Header";
import { Spacer } from "./Spacer";
import "./Privacy.css";
import "./Shared.css";

export const Privacy: React.FC = () => {
    return (
        <div>
            <Header
                className="privacy-header"
                header="Our lips are sealed"
            />
            <div className="side-margin">
                <div className="flex main">
                    <p>
                        We have strong views on privacy when it comes to our own
                        data, and we promise to treat your data equally
                        carefully. If you decide to 'Send us your data', you can
                        rest assured that we keep it safe and anonymous.
                    </p>
                    <p>
                        We don't wish to be the kind of company that treats
                        customer data as a primary source of income. Instead we
                        make our money delivering novel and powerful mental
                        health tools. We promise to use your data only to
                        improve our services, to study how effective our tools
                        are and to develop them further.
                    </p>
                    <p>
                        To us, you data-sharing gals and guys are anonymous
                        little dots in graphs that look like this. Thanks little
                        dots!
                    </p>
                    <div className="privacy-image-container">
                        <img
                            src="./images/privacy-data.png"
                            className="privacy-image"
                            alt="people as dots"
                        />
                    </div>
                    <Spacer height="50px" />
                    <h2 id="the-small-print">The small print. </h2>
                    <p>
                        We collect physiological data (such as heart rate, or
                        galvanic skin response) in order to monitor the effect
                        of our treatments. We use the data to give you feedback
                        on how effective the treatments are, and to further
                        develop and optimise them.
                    </p>
                    <p>
                        We also collect emails if you mail us, and use those
                        email addresses to keep you updated. The data is kept
                        only as long as is necessary, and will be deleted with a
                        rolling 18-month window. You can always contact us and
                        ask to have your data made available to you, or to have
                        it deleted. Read your complete rights under{" "}
                        <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e2254-1-1">
                            article 13
                        </a>{" "}
                        of the General Data Protection Regulation (GDPR).
                    </p>
                    <p>
                        If you want to know more, mail our{" "}
                        <a href="mailto:dpo@mother.technology">DPO</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};
