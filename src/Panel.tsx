/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./Panel.css";

type PanelProps = {
    header: string;
    img?: string;
    link?: string;
    backgroundColor?: string;
    color?: string;
    children: JSX.Element;
};

export const Panel: React.FC<PanelProps> = ({
    header,
    img,
    link,
    backgroundColor,
    color,
    children,
}: PanelProps) => {
    const hashId = header.replace(/\s+/g, "-").toLowerCase();

    return (
        <div className={`panel-item ${backgroundColor}`}>
            {img && <img src={img} alt="product" />}
            <div className="flex panel-info">
                <h2 id={hashId} className={color}>
                    {header}
                </h2>
                {children}
            </div>
        </div>
    );
};
