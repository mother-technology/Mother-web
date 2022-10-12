/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./PanelTextTab.css";

type PanelProps = {
    id: number;
    active: boolean;
    header: string;
    parentCallback: (arg: number) => void;
};

export const PanelTextTab: React.FC<PanelProps> = ({
    id,
    active,
    header,
    parentCallback,
}: PanelProps) => {
    return (
        <>
            <button
                onClick={() => parentCallback(id)}
                className={`flex panel-text-tab light-grey ${
                    active ? "active" : null
                }`}
            >
                {header && <h3>{header}</h3>}
            </button>
        </>
    );
};
