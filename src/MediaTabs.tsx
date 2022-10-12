/* eslint-disable jsx-a11y/alt-text */

import React, { useState } from "react";
import { PanelTextTab } from "./PanelTextTab";
import { Spacer } from "./Spacer";
import "./MediaTabs.css";

export const MediaTabs: React.FC = () => {
    const [openId, setOpenId] = useState<number>(0);

    const handleCallback = (childData: number): void => {
        setOpenId(childData);
    };

    return (
        <>
            <div className="panel-text-tabs">
                <PanelTextTab
                    id={0}
                    active={openId === 0}
                    header="Team images"
                    parentCallback={handleCallback}
                />
                <PanelTextTab
                    id={1}
                    active={openId === 1}
                    header="Logo"
                    parentCallback={handleCallback}
                />
                {/* <PanelTextTab
                    id={2}
                    active={openId === 2}
                    header="VR images"
                    parentCallback={handleCallback}
                /> */}
            </div>
            <Spacer height="25px" />
            <div className="flex media-images">
                {openId === 0 && ( // team
                    <>
                        <img src="/images/media_ingrid.png" />
                        <img src="/images/media_bjorn.png" />
                        <img src="/images/media_jenny.png" />
                        <img src="/images/media_tomas.png" />
                        <img src="/images/media_team.png" />
                        <img src="/images/media_team_ijb.png" />
                    </>
                )}
                {openId === 1 && ( // logos
                    <>
                        <img src="/images/mother-dark-800x168.png" />
                        <img src="/images/mother-white-800x168.png" />
                        <img src="/images/mother-dark-m.png" />
                        <img src="/images/mother-white-m.png" />
                    </>
                )}
                {/* {openId === 2 && ( // VR images
                    <>
                        <img src="/images/hertz-interface.png" />
                        <img src="/images/hertz-interface.png" />
                    </>
                )} */}
            </div>
        </>
    );
};
