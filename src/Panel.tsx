/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./Panel.css";

type PanelProps = {
    header: string;
    img?: string;
    link?: string;
    backgroundColor?: string;
    color?: string;
    hashId?: string;
    children: JSX.Element;
};

export const Panel: React.FC<PanelProps> = ({
    header,
    img,
    link,
    hashId,
    backgroundColor,
    color,
    children,
}: PanelProps) => {
    return (
        <div className={`panel-item ${backgroundColor}`}>
            {img && <img src={img} />}
            <div className="flex panel-info">
                <h2 id={hashId ? hashId : ""} className={color}>
                    {header}
                </h2>
                {children}
            </div>
        </div>
    );
};
