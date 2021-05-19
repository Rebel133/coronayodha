import React from "react";
import Logo from "../img/Logo.png";
import "./navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <NavLink className="navbar-brand" exact to="/">
                <img
                  src={Logo}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="logo"
                />
                Corona Yodha
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/event"
                    >
                      Events
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/precaucations"
                    >
                      Precaucations
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/live_status"
                    >
                      Live Status
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      exact
                      activeClassName="menu_active"
                      to="/live_state_status"
                    >
                      Live State Report
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
