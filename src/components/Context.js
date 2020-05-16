import React from "react";
import axios from "axios";
const { Provider, Consumer } = React.createContext();
class ContextProvider extends React.Component {
  state = {
    signed_in: false,
    cart: [],
  };

  // ! As cookies are implemented, the user won't need to log in again if he opens a new tab

  initialCheck = () => {
    console.log("signed_in", localStorage.getItem("signed_in"));
    if (localStorage.getItem("signed_in")) {
      this.setState({
        user: localStorage.getItem("user"),
        signed_in: localStorage.getItem("signed_in"),
      });
    }
  };
  componentDidMount() {
    this.initialCheck();
  }

  SignIn = (email) => {
    console.log("called sign in");
    if (!this.state.signed_in) {
      localStorage.setItem("signed_in", true);
      localStorage.setItem("user", email);
      this.setState(() => {
        console.log("called toggle sign in");
        return {
          signed_in: true,
          user: email,
        };
      });
    }
  };
  SignOut = () => {
    console.log("called sign out");
    if (this.state.signed_in) {
      this.setState(() => {
        localStorage.removeItem("signed_in");
        localStorage.removeItem("user");
        console.log("called toggle sign out");
        return {
          signed_in: false,
        };
      });
    }
  };
  addToCart = (item) => {
    // let currCart = this.state.cart.concat(item);
    // console.log(item);
    // this.setState({
    //   cart: currCart,
    // });
    // console.log(this.state);
    console.log(item);
    axios
      .post("http://localhost:5000/cart", {
        message: "insert",
        details: {
          user_id: this.state.user,
          merch_id: item.merch_id,
          quantity: item.quantity,
        },
      })
      .then((res) => {
        console.log(res);
      });
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,
          user: this.state.user,
          signed_in: this.state.signed_in,
          addToCart: this.addToCart,
          SignIn: this.SignIn,
          SignOut: this.SignOut,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as ContextConsumer, ContextProvider };
