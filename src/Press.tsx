/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import { Header } from "./Header";

export const Press: React.FC = () => {
  return (
    <div>
      <Header
        className="main-header"
        header="Press"
        subHeader="Product and team images"
      />
      <div className="side-margin">
        <div className="flex main">
          <p>
            As soon as we have taken some pictures of the team, we will update
            this page.
          </p>
        </div>
      </div>
    </div>
  );
};
