import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class MerchCheckout extends Component {
  render() {
    // {this.props.context.signed_in}
    if (this.props.context.signed_in) {
      return (
        <div>
          <h1>Hi</h1>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
    return <Redirect to="/signin" />;
  }
}
