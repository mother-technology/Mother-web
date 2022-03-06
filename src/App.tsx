import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { Main } from "./Main";
import { Team } from "./Team";
import { Press } from "./Press";
import { Privacy } from "./Privacy";
import { VirtualReality } from "./VirtualReality";
import { CognitiveTools } from "./CognitiveTools";
import { Biofeedback } from "./Biofeedback";
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
            path="/privacy"
            component={Privacy}
            title="Privacy - We make strong promises on data security. | mother.technology"
            description="We value your data, to feedback into our models and optimise the tools we develop. We promise to treat it with care, keeping it anonymous, encrypted and deleteable."
          />
          <Page
            exact
            path="/press"
            component={Press}
            title="Press - Images of the team and products | mother.technology"
            description="Hi journalist or reviewer! We would love it if you wanted to write about our company."
          />
          <Page
            exact
            path="/virtual-reality"
            component={VirtualReality}
            title="Virtual Reality - We develop digital tools to target the subconscious | mother.technology"
            description=""
          />
          <Page
            exact
            path="/biofeedback"
            component={Biofeedback}
            title="Biofeedback - We develop digital tools to target the subconscious | mother.technology"
            description=""
          />
          <Page
            exact
            path="/Cognitive-tools"
            component={CognitiveTools}
            title="Cognitive tools - We develop digital tools to target the subconscious | mother.technology"
            description=""
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
