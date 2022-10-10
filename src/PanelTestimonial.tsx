/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./PanelTestimonial.css";

type PanelProps = {
    text: string;
    name: string;
    img?: string;
    color?: string;
};

export const PanelTestimonial: React.FC<PanelProps> = ({
    img,
    text,
    name,
    color,
}: PanelProps) => {
    return (
        <div className={`flex panel-testimonial ${color}`}>
            <div className="flex panel-testimonial-container">
                {typeof img === "string" && img.trim().length !== 0 ? (
                    <img src={img} />
                ) : null}
                <div className="flex text">
                    <p>{text}</p>
                    <p className="italic">{name}</p>
                </div>
            </div>
        </div>
    );
};
