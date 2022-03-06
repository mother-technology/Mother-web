/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import { Header } from "./Header";

export const Biofeedback: React.FC = () => {
  return (
    <div>
      <Header
        className="main-header"
        header="Biofeedback"
        subHeader="Mental wellbeing"
      />
      <div className="side-margin">
        <div className="flex main">
          <p></p>
        </div>
      </div>
    </div>
  );
};
