import React from "react";
import "./CircleWithText.css";

type PanelProps = {
  backgroundColor: string;
  children: JSX.Element;
};

export const CircleWithText: React.FC<PanelProps> = ({
  backgroundColor,
  children,
}: PanelProps) => {
  return (
    <div className={`circle-with-text ${backgroundColor}`}>{children}</div>
  );
};
