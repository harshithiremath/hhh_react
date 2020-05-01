import React from "react";
const { Provider, Consumer } = React.createContext();
class ContextProvider extends React.Component {
  state = {
    signed_in: false,
  };
  toggleSignIn = () => {
    console.log("called toggle sign1");
    this.setState((prevState) => {
      console.log("called toggle sign2");
      return {
        signed_in: true,
      };
    });
  };
  addToCart(item) {
    console.log(item);
  }
  render() {
    return (
      <Provider value={{ theme: this.state, toggleSignIn: this.toggleSignIn }}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer as ContextConsumer, ContextProvider };
