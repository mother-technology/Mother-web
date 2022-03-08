import React from "react";
import "./Panel.css";
// import { Link, withRouter, RouteComponentProps } from "react-router-dom";

type PanelProps = {
  header: string;
  img?: string;
  link?: string;
  backgroundColor?: string;
  color?: string;
  children: JSX.Element;
};

// export const Panel: React.FC<RouteComponentProps<PanelProps>> = (props) => {
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
    // <Link to={link}>
    <div className={`flex panel-item ${backgroundColor}`}>
      {img && <img src={img} alt="product" />}
      <div className="flex panel-info">
        <h2 id={hashId} className={color}>
          {header}
        </h2>
        {children}
      </div>
    </div>
    // </Link>
  );
};

// export default withRouter(Panel);
