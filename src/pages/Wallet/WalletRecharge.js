import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./walletrecharge.css";
import StripeCheckout from "react-stripe-checkout";
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
      .post(
        "http://localhost:5000/rechargeWallet",
        {
          user_email: this.props.context.user,
          amount: this.state.amount,
        },
        {
          headers: {
            authorization: "Bearer " + this.props.context.user,
          },
        }
      )
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
  async handleToken(token) {
    const response = await axios.post("http://localhost:5000/rechargeStripe", {
      token: token,
    });
    console.log(response);
    if (response.status === 200) {
      console.log("Success");
      alert("Success");
    } else {
      console.log(response.status);
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
                  className="cardNumberInput"
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
            <div className="stripe">
              <StripeCheckout
                stripeKey="pk_test_51GqJIvEkPqBpQLilcyu9WGiBe3RZ3LVo1wlmCQ7O9yv0rZDz9i0hcszPDf56UJvBAqVIAXlVOnvataXe4g1rY6bU00xc2wxNyW"
                name="Harsh"
                description="Pay HHH"
                amount={1000 * 100}
                token={this.handleToken}
                currency={"INR"}
                email
              />
            </div>
          </div>
        ) : (
          <Redirect to="/signin" />
        )}
      </>
    );
  }
}
