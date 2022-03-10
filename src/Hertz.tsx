/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import { Header } from "./Header";
import { Panel } from "./Panel";
import { ABriefBackground } from "./ABriefBackground";
import { TipsAndTricks } from "./TipsAndTricks";

export const Hertz: React.FC = () => {
  return (
    <div>
      <Header
        className="main-header"
        header="You're not going to like our first app."
        subHeader="But your brain will"
      />
      <div className="side-margin">
        <div className="flex main">
          <p>
            Anxiety is the single most common mental health issue in the world.
            It doesn’t have to be.
          </p>
          <p>
            Hertz. provides{" "}
            <a href="https://en.wikipedia.org/wiki/Biofeedback">biofeedback</a>{" "}
            from your{" "}
            <a href="https://www.thecut.com/2019/05/i-now-suspect-the-vagus-nerve-is-the-key-to-well-being.html">
              vagus nerve
            </a>{" "}
            to your brain. It has two components, one for breathing and one for
            focus.
          </p>
          <p>
            Hertz. coaches you to breath in a way which stimulates your vagus
            nerve, as you would with a meditative breathing exercise, or with
            activities such as{" "}
            <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6189422/">
              yoga
            </a>
            . This will tone your vagus, building resilience to future stress.
            Over time the biofeedback will set up a connection between your
            conscious breath control and the vagal nerve stimulation, increasing
            your CVC and developing within yourself a powerful ability to
            consciously relax.
          </p>
        </div>

        <div className="panels">
          <Panel header="The target" backgroundColor="pink">
            <>
              <p className="small">
                Regular stimulation of your vagus nerve increases your HRV
                (heart rate variability) as well as your CVC (cardiac vagal
                control), which reflects how well you can regulate your anxiety,
                the quality of your sleep, your digestion, your mood… the list
                goes on.
              </p>
              <p>
                With a steady diet of deep breathing, yoga and meditation,
                you’ll have vagal nerve control a Buddhist monk would kill for.{" "}
              </p>
              <p>But who has that kind of time?</p>
            </>
          </Panel>
          <Panel header="The time" backgroundColor="yellow">
            <>
              <p className="small">
                For a smart world we need smart tools. Hertz. pairs a simple HRV
                training routine (breath in, breath out) with a saccadic gaze
                control exercise (focus on the red dot).{" "}
              </p>
              <p>
                The changes in your HRV are used as feedback to modulate the
                speed of the dot. Breathing out, your heart skips a beat, and
                the dot slows down.{" "}
              </p>
              <p>Or was it the other way around?</p>
            </>
          </Panel>
          <Panel header="The magic" backgroundColor="black">
            <>
              <p className="small">
                Tying your vagal nerve stimulation to a target that gives direct
                feedback allows you to take a break, and gives your basal
                ganglia (your brain's dedicated hardware for implicit
                associative learning) something to do.
              </p>
              <p>
                With Hertz. they cumulate the effort you put in, giving you a
                toned vagus nerve, strengthening your CVC, boosting your HRV and
                relieving your anxiety.
              </p>
            </>
          </Panel>
        </div>
        <div className="flex main">
          <div className="separator" />
          <ABriefBackground />
          <div className="separator" />
          <TipsAndTricks />
        </div>
      </div>
    </div>
  );
};
