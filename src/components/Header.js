import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../components/Context";
export default function Header() {
  const signOut = (props) => {
    console.log(props);
    props.SignOut();
  };
  const [wallet, setWallet] = useState(0);
  const FindBlanace = (email) => {
    axios
      .post("http://localhost:5000/wallet", {
        user: {
          email: email,
        },
      })
      .then((res) => {
        const balance = res.data.balance.balance;
        setWallet(balance);
      });
  };
  return (
    <header>
      <div className="menu">
        <ul>
          <li>
            <Link className="active" to="/">
              <img
                src={require("./images/logo.png")}
                style={{
                  width: "50px",
                  height: "50px",
                  padding: "0px",
                  marginTop: "-13px",
                  marginBottom: "0px",
                  marginRight: "-10px",
                }}
                alt="logo"
              />
            </Link>
          </li>
          <li>
            <Link className="non-active" to="/webPlayer">
              Music
            </Link>
          </li>
          <li>
            <Link className="non-active" to="/passes">
              Tours
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
                    <div className="account-header">
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
                              LogOut
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div>
                    <div className="signup-btn">
                      <Link to="/signin" className="signup-text">
                        Log In
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