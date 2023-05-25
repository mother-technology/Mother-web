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
                                to="/#our-products"
                                className={
                                    location.hash === "#our-products"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                Our products
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
                        </div>
                        <div className="link-group">
                            <a href="https://sickofsmoking.app">
                                Sick of Smoking
                            </a>
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
                                to="/privacy#the-small-print"
                                className={
                                    location.hash === "#the-small-print"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                The small print
                            </HashLink>
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
                            <HashLink
                                to="/media#contact-us"
                                className={
                                    location.hash === "#contact-us"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                Contact us
                            </HashLink>
                            <HashLink
                                to="/media#about-us"
                                className={
                                    location.hash === "#about-us"
                                        ? "subLink active"
                                        : "subLink"
                                }
                            >
                                About us
                            </HashLink>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
