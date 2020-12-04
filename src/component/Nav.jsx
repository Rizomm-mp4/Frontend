import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="wrapper ">
      <div className="sidebar-wrapper">
        <ul className="nav">
          <Link to="/">
            <li className="nav-item active">
              <a className="nav-link">
                <div className="material-icons">Home</div>
              </a>
            </li>
          </Link>

          <Link to="/login">
            <li className="nav-item">
              <a className="nav-link">
                <div className="material-icons">Login</div>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
