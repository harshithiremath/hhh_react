import React from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../components/Context";
export default function Header() {
  const signOut = (props) => {
    props.SignOut();
  };
  return (
    <header>
      <div className="menu">
        <ul>
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="non-active" to="/passes">
              Tours/Passes
            </Link>
          </li>

          <li>
            <Link className="non-active" to="/merch">
              Merch
            </Link>
          </li>

          <ContextConsumer>
            {(context) => {
              if (context.state.signed_in) {
                return (
                  <div>
                    <li className="account-head-wrapper">
                      Account
                      <ul>
                        <li>
                          <Link className="account-head-item" to="/cart">
                            Cart
                          </Link>
                        </li>
                        <li>
                          <Link className="account-head-item" to="/orders">
                            Orders
                          </Link>
                        </li>
                        <li>
                          <Link
                            onClick={() => signOut(context)}
                            className="account-head-item"
                            to="/signin"
                          >
                            Log Out
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a className="signup-btn">
                      <Link to="/signin" className="signup-text">
                        Log in
                      </Link>
                    </a>
                  </div>
                );
              }
            }}
          </ContextConsumer>
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
