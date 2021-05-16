import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigate.css";
function Navigate() {
  return (
  <div className="navigation">
    <div>
    <h2>
      <Link to="/">
        AniRec
      </Link></h2>
      
      <div>
        <ul className="nav-item">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/log-in">
              Login
            </Link>
          </li>
          <li>
            <Link to="/Anime">
              Anime
            </Link>
          </li>
          <li>
            <Link to="/ShowPage">
              ShowPage
            </Link>
          </li>
        </ul>
      </div>
    </div>
</div>
);
}

export default withRouter(Navigate);