import React from "react";
const { Provider, Consumer } = React.createContext();

class ContextProvider extends React.Component {
  state = {
    signed_in: false,
    cart: [],
  };
  SignIn = () => {
    console.log("called sign in");
    if (!this.state.signed_in) {
      this.setState(() => {
        console.log("called toggle sign in");
        return {
          signed_in: true,
        };
      });
    }
  };
  SignOut = () => {
    console.log("called sign out");
    if (this.state.signed_in) {
      this.setState(() => {
        console.log("called toggle sign out");
        return {
          signed_in: false,
        };
      });
    }
  };
  addToCart = (item) => {
    let currCart = this.state.cart.concat(item);
    console.log(item);
    this.setState({
      cart: currCart,
    });
    console.log(this.state);
  };
  render() {
    return (
      <Provider
        value={{
          state: this.state,
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
