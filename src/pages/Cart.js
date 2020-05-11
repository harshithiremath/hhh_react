import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

export default class Cart extends Component {
  componentDidMount() {
    axios
      .post("http://localhost:3000/cart", {
        message: "view",
        details: {
          user_id: 23,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }
  render() {
    if (this.props.signed_in) {
      return (
        <div className="cart-container">
          <div className="cart-items-above-final-price">
            <div>
              <ul className="cart-container-left-ul">
                <li>hi1</li>
                <li>hi2</li>
                <hr />
              </ul>
              <div className="cart-container-right-price">
                <span>₹ 69</span>
              </div>
            </div>
            <div>
              <ul className="cart-container-left-ul">
                <li>hi1</li>
                <li>hi2</li>
              </ul>
              <div className="cart-container-right-price">
                <span>₹ 69</span>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
