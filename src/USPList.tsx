/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { IoCheckmark } from "react-icons/io5";
import "./Shared.css";
import "./USPList.css";

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
                <USPItem key={item.title} title={item.title} text={item.text} />
            ))}
        </div>
    );
};

interface USPItemProp {
    title: string;
    text: string;
}

const USPItem: React.FC<USPItemProp> = ({ title, text }) => {
    return (
        <>
            <div className="check yellow">
                <IoCheckmark size={30} />
            </div>
            <div className="info">
                <h4>{title}</h4>
                <p>{text}</p>
            </div>
        </>
    );
};
