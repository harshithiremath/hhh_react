import React from "react";
const { Provider, Consumer } = React.createContext();
class ContextProvider extends React.Component {
  state = {
    signed_in: true,
  };
  addToCart(item) {
    console.log(item);
  }
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { Consumer as ContextConsumer, ContextProvider };
