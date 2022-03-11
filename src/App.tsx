import React from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import { Main } from "./Main";
import { Team } from "./Team";
import { Media } from "./Media";
import { Privacy } from "./Privacy";
import { HertzLite } from "./HertzLite";
import { Hertz } from "./Hertz";
import { ConsciousnessCraft } from "./ConsciousnessCraft";
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
            path="/media"
            component={Media}
            title="Media - Images of the team and products | mother.technology"
            description="Hi journalist or reviewer! We would love it if you wanted to write about our company."
          />
          <Page
            exact
            path="/hertz"
            component={Hertz}
            title="Hertz | mother.technology"
            description=""
          />
          <Page
            exact
            path="/hertz-lite"
            component={HertzLite}
            title="Hertz lite  | mother.technology"
            description=""
          />
          <Page
            exact
            path="/consciousness-craft"
            component={ConsciousnessCraft}
            title="Consciousness craft  | mother.technology"
            description=""
          />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
