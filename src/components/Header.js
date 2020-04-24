import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <div className="menu">
        <ul className="menu">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <div className="signup-btn">
            <Link to="/orders" className="signup-text">
              Orders
            </Link>
          </div>
        </ul>
        {/*<a href="lion.html" className="no_und">
            <li className="allheads">New Music</li>
            </a>
            <a href="lion.html" className="no_und">
            <li className="allheads">Tour</li>
            </a>
            <a href="lion.html" className="no_und">
            <li className="allheads">Merch</li>
            </a>
            <a href="team_page/index.php" class="no_und">
            <li class="allheads">Team</li>
            </a>
        */}
      </div>
    </header>
  );
}
