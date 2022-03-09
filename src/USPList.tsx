/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Shared.css";
import "./USPList.css";
import { IoCheckmarkSharp } from "react-icons/io5";

interface Props {
  usp: {
    title: string;
    text: string;
  }[];
}

export const USPList: React.FC<Props> = ({ usp }) => {
  return (
    <div className="usp">
      {usp.map((item) => (
        <>
          <div className="flex check pink">
            <IoCheckmarkSharp size={30} />
          </div>
          <div className="info">
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        </>
      ))}
    </div>
  );
};
