/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Menu.css";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";

export const Menu: React.FC<RouteComponentProps> = (props) => {

    return (
          <div id="navbar" className="flex">
              <div className="link">
                  <Link to="/" id="home" className={props.location.pathname === '/' ? 'active' : ''} >
                      HOME
                  </Link>
                  <Link to="/about" className={props.location.pathname === '/about' ? 'active' : ''} >
                      ABOUT
                  </Link>
                  <Link to="/collaboration" className={props.location.pathname === '/collaboration' ? 'active' : ''} >
                    COLLABORATE
                  </Link>
                  <Link to="/contact" className={props.location.pathname === '/contact' ? 'active' : ''} >
                      CONTACT
                  </Link>
              </div>
          </div>
    );
};

export default withRouter(Menu);
