import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import M from 'materialize-css/dist/js/materialize.min.js';

const Nav = () => {
  const location = useLocation();

  useEffect(() => {
    let sidenav = document.querySelector('#mobile-menu');
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <div>
      <nav>
        <div className="nav-wrapper">
            <Link to="/"className="brand-logo"><img src="./favicon.ico" style={{ height: "50px" }} /></Link>
            <a href="#" data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li className={location.pathname === "/search" ? "active" : ""}><Link to="/search"><i className="material-icons">search</i></Link></li>
                <li className={location.pathname === "/saved" ? "active" : ""}><Link to="/saved"><i className="material-icons">bookmark</i></Link></li>
            </ul>
        </div>
      </nav>

        <ul className="sidenav" id="mobile-menu">
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>

      </div>
  );
}

export default Nav;
