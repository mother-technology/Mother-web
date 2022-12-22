import React from "react";

type SpacerProps = {
    height: string;
    hasLine?: boolean;
    inverted?: boolean;
};

export const Spacer = ({ height, hasLine, inverted }: SpacerProps) => {
    let width = "1px";
    if (hasLine) width = "100px";
    
    let color = "black";
    if (inverted) color = "white"; 

    return (
        <div
            style={{
                height: height,
                width: width,
                minWidth: width,
                minHeight: height,
                display: "flex",
                alignItems: "center",
            }}
        >
            {hasLine && (
                <div
                    style={{
                        border: `1px solid ${color}`,
                        width: "100px",
                    }}
                />
            )}
        </div>
    );
};
