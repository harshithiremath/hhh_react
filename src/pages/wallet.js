import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../css/wallet.css"
export default class Wallet extends Component {
  state = {
    wallet: [],
  };
  componentDidMount() {
    if (this.props.context.signed_in) {
      axios
        .get("http://localhost:5000/getWalletInfo", {
          params: {
            user_id: this.props.context.user,
          },
        })
        .then((res) => {
          console.log(res.data);
          this.setState({ wallet: res.data[0] });
        });
    }
  }
  render() {
    // {this.props.context.signed_in}
    // console.log(this.state);
    let date1 = new Date(this.state.wallet.expiry);
    let date_to_display = date1.toDateString();
    let balance_after_payment =this.state.wallet.balance - this.state.cartSubTotal;
    console.log(this.props.context.signed_in)
    if(this.props.context.signed_in){
    return(
      <>
          <h1 className="checkout-page-h1">WALLET</h1>
          <div className="checkout-page-container">
            <div className="checkout-page-left-wallet-container">
              <h3 className="checkout-page-h3">Your Wallet Details</h3>
              <div>
                <div className="checkout-page-left-wallet-left">
                  <span>User ID: </span>
                </div>
                <div className="checkout-page-left-wallet-right">
                  <span>{this.state.wallet.user_id}</span>
                </div>
              </div>
              <div>
                <div className="checkout-page-left-wallet-left">
                  <span>Wallet ID: </span>
                </div>
                <div className="checkout-page-left-wallet-right">
                  <span>{this.state.wallet.wallet_id}</span>
                </div>
              </div>
              <div>
                <div className="checkout-page-left-wallet-left">
                  <span>Expiry: </span>
                </div>
                <div className="checkout-page-left-wallet-right">
                  <span>{date_to_display.slice(4, 15)}</span>
                </div>
              </div>
            </div>
            <div className="checkout-page-right-container">
              <div className="checkout-page-above-final-price">
                <div>
                  <div className="checkout-page-above-fp-left">
                    <span>Available balance :</span>
                  </div>
                  <div className="checkout-page-above-fp-right">
                    <span>₹ {this.state.wallet.balance}</span>
                  </div>
                </div>
              </div>
              <div className="moneytowallet">
                  <div>
                    <Link
                      to="/wallet/addToWallet"
                      className="checkout-page-confirm-button"
                    >
                      ADD MONEY TO WALLET
                    </Link>
                  </div>
              </div>
            </div>
          </div>
        </>
      );
    }
    else{
      return(
        <h1>afasf</h1>
      )
    }
    // return <Redirect to="/signin" />;
  }
}
