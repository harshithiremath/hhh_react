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
              // ? Context is passed as the signed_in state has to be known to change the content of the header

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
                    <div className="signup-btn">
                      <Link to="/signin" className="signup-text">
                        Log in
                      </Link>
                    </div>
                  </div>
                );
              }
            }}
          </ContextConsumer>
        </ul>
      </div>
    </header>
  );
}
