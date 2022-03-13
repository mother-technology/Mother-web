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
    let right: string = "25px";

    let location = useLocation();

    return (
        <>
            <div
                id="menuIcon"
                style={{ right: right }}
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
                    <div className="flex column">
                        <Link
                            to="/"
                            className={
                                location.pathname === "/" ? "active" : ""
                            }
                        >
                            Home
                        </Link>
                        <HashLink to="/#vr" className="subLink">
                            VR
                        </HashLink>

                        <Link
                            to="/"
                            className={
                                location.pathname === "/" ? "active" : ""
                            }
                        >
                            Products
                        </Link>

                        <Link to="/hertz" className="subLink">
                            Hertz
                        </Link>
                        <Link to="/hertz-lite" className="subLink">
                            Hertz lite
                        </Link>
                        <Link to="/consciousness-craft" className="subLink">
                            Consciousness craft
                        </Link>
                        <Link
                            to="/team"
                            className={
                                location.pathname === "/team" ? "active" : ""
                            }
                        >
                            Team
                        </Link>
                        <HashLink to="/team#our-values" className="subLink">
                            Our values
                        </HashLink>
                        <HashLink to="/team#our-interests" className="subLink">
                            Our interests
                        </HashLink>
                        <Link
                            to="/media"
                            className={
                                location.pathname === "/media" ? "active" : ""
                            }
                        >
                            Media
                        </Link>
                        <HashLink
                            to="/media#other-products"
                            className="subLink"
                        >
                            Other products
                        </HashLink>
                        <Link
                            to="/privacy"
                            className={
                                location.pathname === "/privacy" ? "active" : ""
                            }
                        >
                            Privacy
                        </Link>
                        <HashLink
                            to="/privacy#the-small-print"
                            className="subLink"
                        >
                            The small print
                        </HashLink>
                    </div>
                </div>
            )}
        </>
    );
};

export default Menu;
