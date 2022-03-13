/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import { IoChevronForwardOutline } from "react-icons/io5";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./PanelTextImage.css";

interface IProps extends RouteComponentProps<any> {
    header: string;
    subHeader: string;
    img: string;
    link: string;
}

const PanelTextImage: React.FC<IProps> = ({ header, img, link, subHeader }) => {
    return (
        <Link className="panel-text-image light-grey" to={link}>
            <div className="narrow-container">
                <h2>{header}</h2>
                <img src={img} />
                <h2>{subHeader}</h2>
            </div>
            <div className="circle-link yellow">
                <IoChevronForwardOutline size={30} />
            </div>
        </Link>
    );
};

export default withRouter<IProps, React.FC<IProps>>(
    ({ staticContext, ...props }) => PanelTextImage(props)
);
