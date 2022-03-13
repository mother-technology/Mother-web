/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./DownloadApp.css";

/* <img className="preorder" src="./images/order-appstore.png" />*/

type DownloadAppProps = {
    title?: string;
    aHref: string;
};

export const DownloadLink: React.FC<DownloadAppProps> = ({
    title,
    aHref,
}: DownloadAppProps) => {
    return (
        <div className="flex downloadLink">
            <a href={aHref}>
                <img className="appstore" src="./images/appstore-dl.svg" />
            </a>
            <p>{title}</p>
        </div>
    );
};
