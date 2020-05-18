import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./MerchCheckoutcss.css";
export default class TicketCheckout extends Component {
  state = {
    wallet: [],
    ticket_id: this.props.context.state.tourPassToBuy,
  };
  componentDidMount() {
    console.log("tourpass", this.props.context.state.tourPassToBuy);

    if (this.props.context.signed_in & this.props.context.state.tourPassToBuy) {
      axios
        .get("http://localhost:5000/getWalletInfo", {
          params: {
            user_id: this.props.context.user,
          },
        })
        .then((res) => {
          // console.log(res.data);
          this.setState({ wallet: res.data[0] });
        });

      console.log("tourpass", this.props.context.state.tourPassToBuy);
      axios
        .get("http://localhost:5000/singleTour", {
          params: { tour_id: this.props.context.state.tourPassToBuy },
        })
        .then((res) => {
          // console.log(res.data[0]);
          this.setState({ ticket: res.data[0] });
        });
    }
  }
  handleClick(e) {
    if (!this.state.redirectToOrders) {
      console.log("called /confirmTicket");
      //   axios
      //     .post("http://localhost:5000/checkout/confirmMerch", {
      //       user_id: this.props.context.user,
      //     })
      //     .then((res) => {
      //       if (res) {
      //         if (res.status === 200) {
      //           this.setState({ redirectToOrders: true });
      //         } else {
      //           this.setState({ showError1: true });
      //         }
      //       } else {
      //         this.setState({ showError1: true });
      //       }
      //     });
      // } else {
      //   this.setState({ showError1: true });
      this.setState({ redirectToOrders: true });
    }

    // this.setState({ redirectToOrders: true });
  }
  render() {
    // {this.props.context.signed_in}
    // console.log(this.state);

    // if (this.props.context.signed_in) {
    //   let date1 = new Date(this.state.wallet.expiry);
    //   let date_to_display = date1.toDateString();
    //   // let balance_after_payment =
    //   //   this.state.wallet.balance - this.state.ticket.price;
    //   let ticket_arr = this.state.ticket;
    //   return (
    //     <>
    //       <h1 className="checkout-page-h1">Checkout</h1>
    //       <div className="checkout-page-container">
    //         <div className="checkout-page-left-wallet-container">
    //           <h3 className="checkout-page-h3">Your Wallet Details</h3>
    //           <div>
    //             <div className="checkout-page-left-wallet-left">
    //               <span>User ID: </span>
    //             </div>
    //             <div className="checkout-page-left-wallet-right">
    //               <span>{this.state.wallet.user_id}</span>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="checkout-page-left-wallet-left">
    //               <span>Wallet ID: </span>
    //             </div>
    //             <div className="checkout-page-left-wallet-right">
    //               <span>{this.state.wallet.wallet_id}</span>
    //             </div>
    //           </div>
    //           <div>
    //             <div className="checkout-page-left-wallet-left">
    //               <span>Expiry: </span>
    //             </div>
    //             <div className="checkout-page-left-wallet-right">
    //               <span>{date_to_display.slice(4, 15)}</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="checkout-page-right-container">
    //           <div className="order">
    //             <div>
    //               <img
    //                 src={require("../images/pass.png")}
    //                 alt="pass"
    //                 // style={{
    //                 //   width: 20,
    //                 //   background: "#ddd",
    //                 //   border: "1px solid #888",
    //                 //   borderRadius: 4,
    //                 // }}
    //                 className="order-ticket-img"
    //               />
    //               <div className="ticket-name">
    //                 <h3>{ticket_arr.tour_name}</h3>
    //                 <h6>{ticket_arr.location}</h6>
    //               </div>
    //               <span className="ticket-current-price">
    //                 {ticket_arr.price}
    //               </span>
    //               {/* <span className="ticket-quantity">
    //                 x {this.props.ticket.ticket_quantity}
    //               </span> */}
    //             </div>
    //           </div>
    //           <div className="checkout-page-above-final-price">
    //             <div>
    //               <div className="checkout-page-above-fp-left">
    //                 <span>Available balance</span>
    //               </div>
    //               <div className="checkout-page-above-fp-right">
    //                 <span>₹ {this.state.wallet.balance}</span>
    //               </div>
    //             </div>
    //             <div>
    //               <div className="checkout-page-above-fp-left">
    //                 <span>Subtotal</span>
    //               </div>
    //               <div className="checkout-page-above-fp-right">
    //                 <span>₹ {this.state.ticket.price}</span>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="checkout-page-below-final-price">
    //             <div>
    //               <div className="checkout-page-above-fp-left">
    //                 <span>Balance after payment</span>
    //               </div>
    //               <div className="checkout-page-above-fp-right">
    //                 {/* <span>₹ {balance_after_payment.toString()}</span> */}
    //               </div>
    //             </div>
    //             // // // // // // // //
    //             {/* {balance_after_payment > 0 ? (
    //               !this.state.redirectToOrders ? (
    //                 <div style={{ float: "right" }}>
    //                   <button
    //                     onClick={(e) => this.handleClick(e)}
    //                     className="checkout-page-confirm-button"
    //                   >
    //                     Confirm
    //                   </button>
    //                 </div>
    //               ) : null
    //             ) : (
    //               <div>
    //                 <Link
    //                   to="/wallet/addToWallet"
    //                   className="checkout-page-confirm-button"
    //                 >
    //                   Add money to wallet
    //                 </Link>
    //               </div>
    //             )} */}
    //             // // // // // // // //
    //           </div>
    //         </div>
    //       </div>
    //       {this.state.showError1 ? (
    //         <div className="checkout-page-alert-message">
    //           <h4>There was some error!</h4>
    //         </div>
    //       ) : null}
    //       {this.state.redirectToOrders ? (
    //         <div className="checkout-page-alert-message">
    //           <h4>Order was successfully placed</h4>
    //           <Link className="cart-bottom-buttons" to="/orders">
    //             Back to Orders
    //           </Link>
    //         </div>
    //       ) : null}
    //     </>
    //   );
    // } else {
    //   return <Redirect to="/signin" />;
    // }
    // return <Redirect to="/signin" />;'

    return <h1>Hi</h1>;
  }
}
