import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./Footer";
import { Hertz } from "./Hertz";
import { HertzLite } from "./HertzLite";
import { Main } from "./Main";
import { Media } from "./Media";
import Page from "./Page";
import { Privacy } from "./Privacy";
import { SickOfSmoking } from "./SickOfSmoking";
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
                        title="Changing your mind for the better | Mother."
                        description="We are a hard-science deep-tech group of scientists and developers, using cutting-edge results from the lab to create digital therapeutics for mental well-being."
                    />
                    <Page
                        exact
                        path="/team"
                        component={Team}
                        title="Our diverse team | Mother."
                        description="The background of the company and its members."
                    />
                    <Page
                        exact
                        path="/privacy"
                        component={Privacy}
                        title="Privacy | Mother."
                        description="We promise to treat your data with care, keeping it anonymous, encrypted and deletable."
                    />
                    <Page
                        exact
                        path="/media"
                        component={Media}
                        title="Media - Images of the team and products | Mother."
                        description="Hi journalist or reviewer! We would love it if you wanted to write about our company."
                    />
                    <Page
                        exact
                        path="/sick-of-smoking"
                        component={SickOfSmoking}
                        title="Sick of Smoking | Mother."
                        description="Ready to quit smoking? Let our VR solution guide you to a smoke-free life"
                    />
                    <Page
                        exact
                        path="/hertz"
                        component={Hertz}
                        title="Hertz | Mother."
                        description="A novel biofeedback and executive function training app to tackle anxiety and train the vagus nerve."
                    />
                    <Page
                        exact
                        path="/hertz-lite"
                        component={HertzLite}
                        title="Hertz lite  | Mother."
                        description="A simple focus training app to tackle anxiety and train the vagus nerve."
                    />
                </Switch>
            </div>
            <Footer />
        </Router>
    );
}

export default App;
