import React from "react";
import Data from "./ordersData";
class OrderHistory extends React.Component {
  // componentDidMount(){

  // }
  //This will be used for the API Call

  render() {
    const orders = Data.map((order) => {
      return (
        <div className="orders" key={order.product_id}>
          <h1>{order.name}</h1>
          <h3>{order.price}</h3>
          <h4>Date ordered:{order.date_ordered}</h4>
          <hr />
          <br />
        </div>
      );
    });
    return <div>{orders}</div>;
  }
}
export default OrderHistory;
