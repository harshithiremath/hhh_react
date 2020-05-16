import React from "react";
import axios from "axios";
export default class single_ticket extends React.Component {
  state = {
    ticket: {},
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/singleTour", {
        params: { tour_id: this.props.ticket.tour_id },
      })
      .then((res) => {
        // console.log(res);
        this.setState({ ticket: res.data[0] });
      });
  }

  render() {
    const ticket_arr = this.state.ticket;
    // console.log("in single_ticket ticket_arr", ticket_arr);
    return (
      <div className="order">
        <div>
          <img
            src={require("../images/pass.png")}
            alt="pass"
            // style={{
            //   width: 20,
            //   background: "#ddd",
            //   border: "1px solid #888",
            //   borderRadius: 4,
            // }}
            className="order-ticket-img"
          />
          <div className="ticket-name">
            <h3>{ticket_arr.tour_name}</h3>
            <h6>{ticket_arr.location}</h6>
            <h4>Ticket ID : {this.props.ticket.ticket_id}</h4>
          </div>
          <span className="ticket-current-price">{ticket_arr.price}</span>
          <span className="ticket-quantity">
            x {this.props.ticket.ticket_quantity}
          </span>
          <span className="ticket-price">₹ {this.props.ticket.price}</span>
        </div>
        <h4>
          {" "}
          Ordered on:{" "}
          {this.props.ticket.time_purchased
            ? this.props.ticket.time_purchased
            : "data unavailable"}
        </h4>
      </div>
    );
  }
}
