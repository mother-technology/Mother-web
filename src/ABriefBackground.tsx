/* eslint-disable jsx-a11y/alt-text */
import React from "react";

export const ABriefBackground: React.FC = () => {
  return (
    <>
      <h2>A brief background</h2>
      <p>
        The{" "}
        <a href="https://simple.wikipedia.org/wiki/Autonomic_nervous_system">
          autonomic nervous system (ANS)
        </a>{" "}
        controls your background processes, such as digestion, heart rate,
        salivation and breathing. You largely can’t consciously affect these
        processes, with breathing as an important exception. It also controls
        your anxiety state, with two opposing forces, the SNS and PNS.
      </p>

      <p>
        The{" "}
        <a href="https://simple.wikipedia.org/wiki/Sympathetic_nervous_system">
          sympathetic nervous system (SNS)
        </a>{" "}
        activates the{" "}
        <a href="https://en.wikipedia.org/wiki/Fight-or-flight_response">
          Flight or Fright response
        </a>{" "}
        state, preparing the body for action. The lungs open up, heart-rate
        increases, digestion is put on hold, the pupils dilate.
      </p>
      <p>
        The{" "}
        <a href="https://simple.wikipedia.org/wiki/Parasympathetic_nervous_system">
          parasympathetic nervous system (PNS)
        </a>{" "}
        brings you towards the ‘Rest and Digest’ state. The body relaxes,
        breathing and heart rate slow down, and blood is directed towards the
        digestive system.
      </p>
      <h4>The PNS is largely controlled by the vagus nerve.</h4>
      <p>
        The main power behind the relaxing PNS force, the vagus relaxes your
        muscles, slows your heart and calms you down. Stimulate your vagus by
        holding your breath for around 30 seconds, dipping your face in cold
        water, coughing, or our favourite,{" "}
        <a href="https://pubmed.ncbi.nlm.nih.gov/31331560/">
          hopping in the sauna
        </a>
        .
      </p>
      <h4>
        Each time the vagus is stimulated, your heart pauses, changing your
        heart rate variability.
      </h4>
      <p>
        Your heart doesn’t beat as regularly as a metronome. Every beat is a
        little different, this difference is your{" "}
        <a href="https://en.wikipedia.org/wiki/Heart_rate_variability">
          heart rate variability (HRV)
        </a>
        .
      </p>
      <h4>Low HRV.</h4>
      <img src="./images/hrv-low.png" />
      <p>
        The differences can be low, when your SNS has hit the ‘Fight or Flight’
        alarm and your heart kicks into high gear. Then the beats come
        regularly, like{" "}
        <a href="https://soundcloud.com/listentobec/energy">techno</a>. Your
        heart is ready for an emergency.
      </p>
      <h4>High HRV.</h4>
      <img src="./images/hrv-high.png" />
      <p>
        The differences can be high, when your PNS is dominant, and your heart
        is recuperating. It slows down its beats, and they come at irregular
        intervals, like{" "}
        <a href="https://www.youtube.com/watch?v=JjFQcV-BruU">jazz</a>. Your
        heart is relaxing and playfully building resilience for future crises.
      </p>

      <p>
        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6048243/">CVC</a>{" "}
        indicates how well controlled your heart is by your vagus. A high value
        indicates a responsive, sensitive and rapidly changing system and
        correlates with good health, positive emotions, effective executive
        function and overall better self-regulation. Think of it as a measure of
        how much emotional unflappability you have in reserve.
      </p>
    </>
  );
};
