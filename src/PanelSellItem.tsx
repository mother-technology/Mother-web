import React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./PanelSellItem.css";

interface IProps extends RouteComponentProps<any> {
    header: string;
    img: string;
    link: string;
    linkText: string;
    buttonText?: string;
    buttonLink?: string;
    children: JSX.Element;
}

const PanelSellItem: React.FC<IProps> = ({
    header,
    img,
    link,
    linkText,
    buttonText,
    buttonLink,
    children,
}) => {
    return (
        <div className="panel-sell-item pink">
            <div className="flex panel-info">
                <h2>{header}</h2>
                {/* id={hashId} */}
                {children}
            </div>
            {img && <img src={img} />}
            {buttonText && (
                <Link className="buttonLink" to="/{buttonLink}">
                    {buttonText}
                </Link>
            )}
            {link && (
                <a className="downloadLink" href={link}>
                    {linkText}
                </a>
            )}
        </div>
    );
};

export default withRouter<IProps, React.FC<IProps>>(
    ({ staticContext, ...props }) => PanelSellItem(props)
);
