import React from "react";

type SpacerProps = {
    height: string;
};

export const Spacer = ({ height }: SpacerProps) => {
    return (
        <span
            style={{
                height: height,
                width: "1px",
                minWidth: "1px",
                minHeight: height,
                display: "block",
            }}
        />
    );
};
