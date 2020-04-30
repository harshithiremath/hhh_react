import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";
import OrderHistory from "./pages/OrderHistory";
import Tours from "./pages/Tours";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
/*
class AppProvider extends React.Component {
  state = {
    user_id: "",
    cart: {},
    wallet: 100,
    addToCart: (productid) => {
      console.log(productid);
      this.setState(() => {
        return { cart: [...this.state.cart, productid] };
      });
    },
  };
  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
*/
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Cloud />
            </Route>
            <Route path="/orders">
              <OrderHistory />
            </Route>
            <Route path="/passes">
              <Tours />
            </Route>
            <Route path="/login"></Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
