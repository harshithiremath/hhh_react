import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./walletrecharge.css"
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
             <h1>Wallet Recharge</h1>
              <div className="row">
                <input
                  name="cardnum"
                  value={this.state.cardnum}
                  onChange={this.handleChange}
                  placeholder="Card number"
                  type="number"
                />
              </div>
              <br />
              <div className="row">
              <input
                name="expiry"
                value={this.state.expiry}
                onChange={this.handleChange}
                placeholder="MMYY"
                type="number"
              />
              </div>

              <br />
              <div className="row">
              <input
                name="pin"
                value={this.state.cvv}
                onChange={this.handleChange}
                placeholder="Pin"
                type="password"
              />
              </div>
              <br />
              <div className="row">
              <input
                name="amount"
                value={this.state.amount}
                onChange={this.handleChange}
                placeholder="Amount"
                type="number"
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
