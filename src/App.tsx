import React from "react";
import { Footer } from "./Footer";
import Menu from "./Menu";
import { Main } from "./Main";
import { Team } from "./Team";
import { Technology } from "./Technology";
import { Contact } from "./Contact";
import { Privacy } from "./Privacy";
import Page from "./Page";
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {

  return (
    <Router>
      <div className="App flex">
        <Menu />
        <ScrollToTop />
        <Switch>
          <Page
            exact
            path="/"
            component={Main}
            title="Mother. - Bringing neuroscience to the people. | mother.technology"
            description="We are a hard-science deep-tech group of scientists and developers, using cutting-edge results from the lab to create digital therapeutics for mental health."
          />
          <Page
            exact
            path="/team"
            component={Team}
            title="The Team - A diverse blend of scientists and engineers. | mother.technology"
            description="The background of the company and its members."
          />
          <Page
            exact
            path="/technology"
            component={Technology}
            title="Collaboration - We are always open to working together. | mother.technology"
            description="Our company maintains a strong academic spirit and values collaboration with other research partners, on technologies such as eye-tracking, or in fields such as cybernetics or neural circuitry."
          />
          <Page
            exact
            path="/contact"
            component={Contact}
            title="Contact - Reach out to us  if you have questions or comments. | mother.technology"
            description="It's an exciting time for neuroscience, and if you're excited about it too, we'd love to hear from you. Please drop us a line."
          />
          <Page
            exact
            path="/privacy"
            component={Privacy}
            title="Privacy - We make strong promises on data security. | mother.technology"
            description="We value your data, to feedback into our models and optimise the tools we develop. We promise to treat it with care, keeping it anonymous, encrypted and deleteable."
          />
        </Switch>
        
      </div>
      <Footer />  
    </Router>
  );
}

export default App;
