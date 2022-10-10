/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Menu.css";

export const Menu: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const height = document.body.clientHeight;
    let right: number = 25;

    let location = useLocation();

    return (
        <>
            <div
                id="menuIcon"
                style={{ right: `${right}px` }}
                onClick={() => setOpen(!open)}
            >
                <IconContext.Provider value={{ className: "menuIcon" }}>
                    {open ? <IoCloseOutline /> : <IoMenuOutline />}
                </IconContext.Provider>
            </div>
            {open !== false && (
                <div
                    id="navbar"
                    className="flex"
                    style={{ height: height }}
                    onClick={() => setOpen(false)}
                >
                    <div className="flex nav-container">
                        <div className="link-group">
                            <Link
                                to="/"
                                className={
                                    location.pathname === "/" ? "active" : ""
                                }
                            >
                                Home
                            </Link>
                            <HashLink
                                to="/#sick-of-smoking"
                                className={
                                    location.hash === "#sick-of-smoking"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                Sick of Smoking
                            </HashLink>
                            <HashLink
                                to="/#who-we-are"
                                className={
                                    location.hash === "#who-we-are"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                Who we are
                            </HashLink>
                            <HashLink
                                to="/#news"
                                className={
                                    location.hash === "#news"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                News
                            </HashLink>
                            {/* <Link
                            to="/vr-for-health-tech"
                            className={
                                location.pathname === "vr-for-health-tech"
                                    ? "active"
                                    : ""
                            }
                        >
                            VR for health tech
                        </Link> */}
                        </div>
                        <div className="link-group">
                            <Link
                                to="/team"
                                className={
                                    location.pathname === "/team"
                                        ? "active"
                                        : ""
                                }
                            >
                                Team
                            </Link>
                            <HashLink
                                to="/team#our-values"
                                className={
                                    location.hash === "#our-values"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                Our values
                            </HashLink>
                        </div>
                        <div className="link-group">
                            <Link
                                to="/media"
                                className={
                                    location.pathname === "/media"
                                        ? "active"
                                        : ""
                                }
                            >
                                Media
                            </Link>
                        </div>
                        <div className="link-group">
                            <Link
                                to="/privacy"
                                className={
                                    location.pathname === "/privacy"
                                        ? "active"
                                        : ""
                                }
                            >
                                Privacy
                            </Link>
                            <HashLink
                                to="/privacy#how-we-protect-your-data"
                                className={
                                    location.hash ===
                                    "#how-we-protect-your-data"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                How we protect your data
                            </HashLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
