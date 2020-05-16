import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import MerchInCart from "./Cart/MerchInCart";
import "./Cart/MerchInCartcss.css";
export default class Cart extends Component {
  state = {
    merchs: [],
    quantities: {},
    prices: {},
    totalPrice: 0,
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
          // this.setState({ merchs: res.data });
          let quantities = { main: {} };
          let prices = { main: {} };
          let totalPrice = 0;
          res.data.map((item) => {
            let temp = { [item.merch_id]: item.quantity };
            let temp1 = { [item.merch_id]: item.price };

            quantities = { main: { ...quantities.main, ...temp } };
            prices = { main: { ...prices.main, ...temp1 } };
            totalPrice = totalPrice + item.price;
          });
          this.setState({
            merchs: res.data,
            quantities: quantities.main,
            prices: prices,
            totalPrice: totalPrice,
          });
        });
    }
  }
  decrementTotalPrice = (id, price) => {
    // console.log(this.state);
    let { prices } = this.state;
    prices[id] = prices[id] - price;
    let tempTotal = this.state.totalPrice - price;
    this.setState({ prices: prices, totalPrice: tempTotal });
    axios.post("http://localhost:5000/decrementCart", {
      body: {
        email: this.props.user,
        merch_id: id,
      },
    });
  };
  incrementTotalPrice = (id, price) => {
    let { prices } = this.state;
    prices[id] = prices[id] + price;
    let tempTotal = this.state.totalPrice + price;
    this.setState({ prices: prices, totalPrice: tempTotal });
    axios.post("http://localhost:5000/incrementCart", {
      body: {
        email: this.props.user,
        merch_id: id,
      },
    });
  };
  updatePrice = (e) => {};
  render() {
    if (this.props.signed_in) {
      let itemsToDisplay = this.state.merchs.map((item) => (
        <MerchInCart
          key={item.merch_id}
          item={item}
          decrement={this.decrementTotalPrice}
          increment={this.incrementTotalPrice}
        />
      ));
      return (
        <div className="cart-container">
          <h1 style={{ marginTop: 10 }} className="h2_upcoming_tours">
            Cart
          </h1>
          <div className="cart-items-above-final-price">{itemsToDisplay}</div>
          <span className="cart-container-right-price">
            ₹ {this.state.totalPrice}
          </span>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
