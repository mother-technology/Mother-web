import React from "react";

type SpacerProps = {
    height: string;
    hasLine?: boolean;
};

export const Spacer = ({ height, hasLine }: SpacerProps) => {
    let width = "1px";
    if (hasLine) width = "100px";

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
                        border: "1px solid black",
                        width: "100px",
                    }}
                />
            )}
        </div>
    );
};
