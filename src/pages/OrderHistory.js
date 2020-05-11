import React from "react";
import SingleOrder from "./single_order";
// // import Data from "./ordersData";
import SingleTicket from "./single_ticket";
import { Redirect } from "react-router-dom";
import axios from "axios";
class OrderHistory extends React.Component {
  state = {
    orders: [],
    tickets: [],
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
          // console.log("orders array after axios", orders);
          this.setState({
            orders: orders,
          });
          // // this.orders = orders;
        });
      axios
        .get("http://localhost:5000/bought_tickets", {
          params: {
            user: user,
          },
        })
        .then((res) => {
          const tickets = res.data;

          this.setState({
            tickets: tickets,
          });
        });
    }
  }
  render() {
    // // console.log("context user", this.props.user);
    // console.log(this.state.tickets);
    if (this.props.user) {
      // // console.log("orders array in orderhistory", this.state.orders);
      let orders_to_render = [];

      if (this.state.orders.length > 0) {
        orders_to_render = this.state.orders.map((order) => (
          <SingleOrder key={order.order_id} order={order} />
        ));
      }

      let tickets_to_render = [];

      if (this.state.tickets.length > 0) {
        tickets_to_render = this.state.tickets.map((ticket) => {
          //     // console.log
          return <SingleTicket key={ticket.ticket_id} ticket={ticket} />;
        });
      }
      // console.log(orders_to_render);
      return (
        <div>
          {tickets_to_render.length === 0 ? (
            <h1 style={{ marginTop: 60 }} className="h2_upcoming_tours">
              You didn't purchase any tour passes yet! :)
            </h1>
          ) : (
            <div>
              <h1 className="h2_upcoming_tours">Your Tour passes</h1>
              <ul className="orders">{tickets_to_render}</ul>
            </div>
          )}
          {orders_to_render.length === 0 ? (
            <h1 className="h2_upcoming_tours">
              You didn't purchase any merchandise yet! :)
            </h1>
          ) : (
            <div>
              <h1 className="h2_upcoming_tours">Your Merchandise orders</h1>
              <ul className="orders">{orders_to_render}</ul>
            </div>
          )}
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}
export default OrderHistory;
