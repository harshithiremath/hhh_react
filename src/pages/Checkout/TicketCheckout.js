// import React, { Component } from "react";

// export default class TicketCheckout extends Component {
//   render() {
//     console.log("tour_id in checkout", this.props);
//     // this.props.location.state.id
//     return <div>hi!</div>;
//   }
// }
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class TicketCheckout extends Component {
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
