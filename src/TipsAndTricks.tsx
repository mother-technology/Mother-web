/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { USPList } from "./USPList";

export const TipsAndTricks: React.FC = () => {
    let tips = [
        {
            title: "Daily practise",
            text: "Best to practise straight after waking, directly after exercise, and just before sleep.",
        },
        {
            title: "Calm environment",
            text: "Practise in a calm, comfortable environment without distractions. If you feel dizzy, take a moment to rest after pracise. The vagus is a very large nerve, activating it repeatedly is relaxing, but also requires effort and might tire you out at first.",
        },
        {
            title: "Relax your muscles",
            text: "Relax your muscles as you breath out. Try to 'will' the dot to slow down as you breath out.",
        },
        {
            title: "Let go of the app",
            text: "As you recognise the sensation of activating your vagus, practise its activation also without the app.",
        },
        {
            title: "Training pays off",
            text: "Consistent daily practise over around one month is approximately the length of time needed to see developments in control of the vagus. Even short, minute long sessions, will have a strong cumulative effect if done daily.",
        },
    ];

    return (
        <>
            <h2>Tips and tricks</h2>
            <USPList usp={tips} />
        </>
    );
};

// <p>
//         Best to practise straight after waking, directly after exercise, and
//         just before sleep.
//       </p>
//       <p>
//         Practise in a calm, comfortable environment without distractions. If you
//         feel dizzy, take a moment to rest after pracise. The vagus is a very
//         large nerve, activating it repeatedly is relaxing, but also requires
//         effort and might tire you out at first.
//       </p>
//       <p>Relax your muscles as you breath out.</p>
//       <p>Try to 'will' the dot to slow down as you breath out.</p>
//       <p>
//         As you recognise the sensation of activating your vagus, practise its
//         activation also without the app.
//       </p>
//       <p>
//         Consistent daily practise over around one month is approximately the
//         length of time needed to see developments in control of the vagus. Even
//         short, minute long sessions, will have a strong cumulative effect if
//         done daily.
//       </p>
