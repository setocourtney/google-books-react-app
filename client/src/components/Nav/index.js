import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
      <nav>
        <div className="nav-wrapper">
            <Link to="/" className="" className="brand-logo">Google Books</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><Link to="/search"><i className="material-icons left">search</i></Link></li>
                <li><Link to="/saved"><i className="material-icons left">bookmark</i></Link></li>
            </ul>
        </div>
      </nav>
  );
}

export default Nav;
