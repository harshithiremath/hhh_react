import React from "react";
import SingleOrder from "./single_order";
// import Data from "./ordersData";
import { Redirect } from "react-router-dom";
import axios from "axios";
class OrderHistory extends React.Component {
  state = {
    orders: [],
  };
  componentDidMount() {
    if (this.props.context.signed_in) {
      const user = this.props.user;
      // // console.log("user from context", user);
      axios
        .get("http://localhost:5000/orders", {
          params: {
            user: user,
          },
        })
        .then((res) => {
          // // console.log(res);
          const orders = res.data;
          console.log("orders array after axios", orders);
          this.setState({
            orders: orders,
          });
          // // this.orders = orders;
        });
      axios.get("http://localhost:5000/");
    }
  }
  render() {
    // // console.log("context user", this.props.user);
    if (this.props.user) {
      // // console.log("orders array in orderhistory", this.state.orders);
      const orders_to_render = this.state.orders.map((order) => (
        <SingleOrder key={order.order_id} order={order} />
      ));
      console.log(orders_to_render);
      return (
        <div>
          {orders_to_render.length === 0 ? (
            <h1 className="h2_upcoming_tours">You have no purchases</h1>
          ) : (
            <div>
              <h1 className="h2_upcoming_tours">Your Merchandise orders</h1>
              <ul className="orders">{orders_to_render}</ul>
            </div>
          )}
          <div>
            <h1 className="h2_upcoming_tours">Your Tour passes</h1>
          </div>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
export default OrderHistory;
