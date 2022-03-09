/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import "./Menu.css";

export const Menu: React.FC<RouteComponentProps> = (props) => {
    const [open, setOpen] = useState<boolean>(false);
    const height = document.body.clientHeight;
    const width = document.body.clientWidth;
    let right: string = "25px";

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
                                props.location.pathname === "/" ? "active" : ""
                            }
                        >
                            Home
                        </Link>
                        <Link to="/" className="subLink">
                            VR
                        </Link>
                        <Link to="/hertz" className="subLink">
                            Hertz
                        </Link>
                        <Link to="/hertz-lite" className="subLink">
                            Hertz lite
                        </Link>
                        <Link to="/self-confidence" className="subLink">
                            Self-confidence
                        </Link>
                        {/* <Link to="/#cognitive-tools" className="subLink">
              Cognitive tools
            </Link> */}
                        {/* <Link to="/#biofeedback" className="subLink">
              Biofeedback
            </Link> */}
                        {/* <Link to="/#virtual-reality" className="subLink">
              Virtual Reality
            </Link> */}
                        <Link
                            to="/team"
                            className={
                                props.location.pathname === "/team"
                                    ? "active"
                                    : ""
                            }
                        >
                            Team
                        </Link>
                        <Link to="team" className="subLink">
                            Our values
                        </Link>
                        <Link to="team" className="subLink">
                            Our interests
                        </Link>
                        <Link
                            to="/media"
                            className={
                                props.location.pathname === "/media"
                                    ? "active"
                                    : ""
                            }
                        >
                            Press
                        </Link>
                        {/* <Link to="team/#our-values" className="subLink">
              Our values
            </Link>
            <Link to="team/#our-interests" className="subLink">
              Our interests
            </Link> */}
                        <Link
                            to="/privacy"
                            className={
                                props.location.pathname === "/privacy"
                                    ? "active"
                                    : ""
                            }
                        >
                            Privacy
                        </Link>
                        <Link to="/privacy" className="subLink">
                            The small print
                        </Link>
                        {/* <Link to="/privacy#the-small-print" className="subLink">
              The small print
            </Link> */}
                        {/* <HashLink
                to="/#cognitive-tools"
                className="subLink"
              >
                Cognitive tools
              </HashLink>
              <HashLink
                to="/#biofeedback"
                className="subLink"
              >
                Biofeedback
              </HashLink>
              <HashLink
                to="/#virtual-reality"
                className="subLink"
              >
                Virtual Reality
              </HashLink>
              <Link
                to="/team"
                className={
                  props.location.pathname === "/team" ? "active" : ""
                }
              >
                Team
              </Link>
              <HashLink
                to="team/#our-values"
                className="subLink"
              >
                Our values
              </HashLink>
              <Link
                to="/privacy"
                className={props.location.pathname === "/privacy" ? "active" : ""}
              >
                Privacy
              </Link>
              <HashLink
                to="/privacy#the-small-print"
                className="subLink"
              >
                The small print
              </HashLink> */}
                    </div>
                </div>
            )}
        </>
    );
};

export default withRouter(Menu);
