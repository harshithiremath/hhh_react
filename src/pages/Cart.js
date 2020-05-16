import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import MerchInCart from "./Cart/MerchInCart";
import "./Cart/MerchInCartcss.css";
export default class Cart extends Component {
  state = {
    merchs: [],
  };
  componentDidMount() {
    if (this.props.signed_in) {
      axios
        .post("http://localhost:5000/cart", {
          message: "view",
          details: {
            email: this.props.context.user,
          },
        })
        .then((res) => {
          this.setState({ merchs: res.data });
        });
    }
  }
  render() {
    if (this.props.signed_in) {
      // console.log(this.state);
      let itemsToDisplay = this.state.merchs.map((item) => (
        <MerchInCart key={item.merch_id} item={item} />
      ));
      return (
        <div className="cart-container">
          <div className="cart-items-above-final-price">{itemsToDisplay}</div>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
