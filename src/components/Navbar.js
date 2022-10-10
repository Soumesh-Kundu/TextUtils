import React from "react";
import PropTypes from "prop-types";
import Darkmode from "./Darkmode";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  // with the help of props we can access the passing variable
  let style = {
    transition: "all 0.4s"
  }
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} style={style}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
            <li>
            {(window.innerWidth<477)? <Darkmode toggleMode={props.toggleMode} mode={props.mode}/>:""}
            </li>
          </ul>
        </div>
          {(window.innerWidth>477)? <Darkmode toggleMode={props.toggleMode} mode={props.mode}/>:""}
      </div>
    </nav>
  );
}
// to set restriction on what datatype come along with the variable in props we use protypes

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string,
};

//setting default if nothing is given
Navbar.defaultProps = {
  title: "Set Title here",
  aboutText: "Set about here",
};
