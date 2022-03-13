import React from "react";
import "./CircleWithText.css";

type PanelProps = {
    step?: string;
    backgroundColor: string;
    children: JSX.Element;
};

export const CircleWithText: React.FC<PanelProps> = ({
    step,
    backgroundColor,
    children,
}: PanelProps) => {
    return (
        <>
            <div className={`circle-with-text ${backgroundColor}`}>
                {step && <p className="step">{step}</p>}
                {children}
            </div>
        </>
    );
};
