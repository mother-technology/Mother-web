import React from "react";
import Menu from "./Menu";

import { Main } from "./Main";
import { About } from "./About";
import { Collaboration } from "./Collaboration";
import { Contact } from "./Contact";
import Page from "./Page";

import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <Menu />
                <Switch>
                    <Page exact path="/" component={Main} title="Mother." description="Digital therapeutics for mental healthcare." />
                    <Page exact path="/about" component={About} title="ABOUT" description="B"/>
                    <Page exact path="/collaboration" component={Collaboration} title="Collaboration" description="C"/>
                    <Page exact path="/contact" component={Contact} title="Contact" description="D"/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
