import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./walletrecharge.css";
export default class WalletRecharge extends Component {
  state = {
    cardnum: "",
    expiry: "",
    pin: "",
    amount: "",
    redirect: false,
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (e) => {
    axios
      .post("http://localhost:5000/rechargeWallet", {
        user_email: this.props.context.user,
        amount: this.state.amount,
      })
      .then((res) => {
        if (res.status === 200) {
          this.setState({ redirect: true });
        }
      });
  };
  renderRedirect() {
    if (this.state.redirect) {
      return <Redirect to="/wallet" />;
    }
  }
  render() {
    return (
      <>
        {this.renderRedirect()}
        {this.props.context.signed_in ? (
          <div className="walletrecharge">
            <div className="recharge-container">
              <h1
                style={{ color: "#333", marginBottom: 10, userSelect: "none" }}
              >
                Wallet Recharge
              </h1>
              <div className="wallet_input_fields">
                <input
                  name="cardnum"
                  value={this.state.cardnum}
                  onChange={this.handleChange}
                  placeholder="Card number"
                  type="number"
                  maxlength="16"
                  pattern="[0-9][0-9]{16}"
                />
              </div>
              <br />
              <div className="wallet_input_fields">
                <input
                  name="expiry"
                  value={this.state.expiry}
                  onChange={this.handleChange}
                  placeholder="MMYY"
                  type="number"
                  maxlength="4"
                  pattern="[0-9]{4}"
                  required
                />
              </div>

              <br />
              <div className="wallet_input_fields">
                <input
                  name="pin"
                  value={this.state.pin}
                  onChange={this.handleChange}
                  placeholder="Pin"
                  type="password"
                  // maxlength="4"
                  pattern="[0-9][0-9]{3}"
                  required
                />
              </div>
              <br />
              <div className="wallet_input_fields">
                <input
                  name="amount"
                  value={this.state.amount}
                  onChange={this.handleChange}
                  placeholder="Amount"
                  type="number"
                  required
                />
              </div>
              <br />
              <button onClick={this.handleSubmit}>Continue</button>
            </div>
          </div>
        ) : (
          <Redirect to="/signin" />
        )}
      </>
    );
  }
}
