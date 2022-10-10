import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Footer";
import { Hertz } from "./Hertz";
import { HertzLite } from "./HertzLite";
import { Main } from "./Main";
import { Media } from "./Media";
import { VR } from "./VR";
import Page from "./Page";
import { Privacy } from "./Privacy";
import ScrollToTop from "./ScrollToTop";
import { Team } from "./Team";

function App() {
    return (
        <Router>
            <div className="App flex">
                <ScrollToTop />
                <Switch>
                    <Page
                        exact
                        path="/"
                        component={Main}
                        title="Mother. - Bringing neuroscience to the people. | mother.technology"
                        description="We are a hard-science deep-tech group of scientists and developers, using cutting-edge results from the lab to create digital therapeutics for mental well-being."
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
                        path="/vr-for-health-tech"
                        component={VR}
                        title="Areas for VR within health  | mother.technology"
                        description="What a second reality can help you with"
                    />
                    <Page
                        exact
                        path="/hertz"
                        component={Hertz}
                        title="Hertz | mother.technology"
                        description="A novel biofeedback and executive function training app to tackle anxiety and train the vagus nerve."
                    />
                    <Page
                        exact
                        path="/hertz-lite"
                        component={HertzLite}
                        title="Hertz lite  | mother.technology"
                        description="A simple focus training app to tackle anxiety and train the vagus nerve."
                    />
                    {/* <Page
                        exact
                        path="/consciousness-craft"
                        component={ConsciousnessCraft}
                        title="Consciousness craft  | mother.technology"
                        description="Our big friendly guide to your brain and mind."
                    /> */}
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
