import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
      <nav>
        <div className="uk-navbar-left">
            <Link to="/" className="uk-navbar-item uk-logo">Google Books</Link>
            <ul className="uk-navbar-nav">
                <li><Link to="/search">Search</Link></li>
                <li><Link to="/saved">Saved</Link></li>
            </ul>
        </div>
      </nav>
  );
}

export default Nav;
