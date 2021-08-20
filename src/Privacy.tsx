import React from "react";
import "./Shared.css";
import "./Privacy.css";
import "./Footer.css";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Privacy: React.FC = () => {
  return (
    <div>
      <Header className="privacy-header" />
      <div className="container">
        <h1>Walls have ears.</h1>
        <p>
          We have strong views on privacy when it comes to our own data, and
          treat it with the pretty good encryption it deserves.
        </p>
        <h2>And we promise to treat your data equally carefully.</h2>
        <p>
          If you decide to 'Send us your data', you can rest assured that we
          keep it as safe, and anonymous as possible. We don't wish to be the
          kind of company that treats customer data as a primary source of
          income. At Mother. we would prefer to make our money delivering novel
          and powerful mental health tools, and so we promise to never exploit
          your data.
        </p>
        <p>
          If you decide to send us your data, we promise to use it only to
          improve our services, to study how effective our tools are and to
          develop them further.
        </p>
        <img src="./images/privacy-data.png" width="300" className="one" />
        <p>
          To us, you data-sharing guys are little dots in graphs that look like
          this.
        </p>
        <p>Thanks little dots!</p>
        <h2>The small print. </h2>
        <p>
          We collect physiological data (such as heart rate, or galvanic skin
          response) in order to monitor the effect of our treatments. We use the
          data to give you feedback on how effective the treatments are, and to
          further develop and optimise them. We also collect emails if you mail
          us, and use those email addresses to keep you updated. The data is
          kept only as long as is necessary, and will be deleted with a rolling
          18-month window. The data is not shared with any third parties except
          in an aggregated, anonymous way. You can always contact our DPO and
          ask to have your data made available to you, or to have it deleted.
          Read your complete rights under{" "}
          <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679#d1e2254-1-1">
            article 13
          </a>{" "}
          of the General Data Protection Regulation (GDPR).
        </p>
        <p>
          If you want to know more, mail our{" "}
          <a href="mailto:dpo@csd.red">DPO</a>.
        </p>
        <Footer />
      </div>
    </div>
  );
};
