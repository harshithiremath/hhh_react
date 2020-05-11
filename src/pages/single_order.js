import React from "react";
import axios from "axios";
export default class single_order extends React.Component {
  state = {
    order: {},
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/merch", {
        params: { merch_id: this.props.order.merch_id },
      })
      .then((res) => {
        // console.log(res);
        this.setState({ order: res.data[0] });
      });
  }

  render() {
    const order_arr = this.state.order;
    // console.log("in single_order order_arr", order_arr);
    return (
      <div className="order">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span>{order_arr.merch_name}</span>
          <span>{this.props.order.quantity} </span>
          <span>{this.props.order.price}</span>
        </div>
        <h4> Ordered on: {this.props.order.time_purchased}</h4>
      </div>
    );
  }
}
