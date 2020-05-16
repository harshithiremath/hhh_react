import React from "react";
import { Route, Switch } from "react-router-dom";
import { ContextConsumer } from "./components/Context";
import Header from "./components/Header";
import WebPlayer from "./pages/WebPlayer/WebPlayer";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import OrderHistory from "./pages/Orders/OrderHistory";
import Tours from "./pages/Tours/Tours";
import MainPage from "./pages/MainPage";
import Merchs from "./pages/Merch/Merchs";
import Cart from "./pages/Cart/Cart";

import SingleMerch from "./pages/SingleMerch/SingleMerch";
import TicketCheckout from "./pages/TicketCheckout";
import Footer from "./components/Footer";

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
          <ContextConsumer>
            {(context) => {
              return (
                <Switch>
                  <Route path="/orders">
                    <OrderHistory user={context.user} context={context} />
                    {/* Because we always want the OrderHistory page to have the context*/}
                  </Route>
                  <Route path="/cart">
                    <Cart
                      user={context.user}
                      signed_in={context.signed_in}
                      context={context}
                    />
                  </Route>
                  <Route path="/merch/:product_id">
                    <SingleMerch context={context} />
                  </Route>
                  <Route path="/checkout/ticket">
                    <TicketCheckout context={context} />
                  </Route>
                  <Route path="/signin">
                    <SignIn context={context} />
                  </Route>
                </Switch>
              );
            }}
          </ContextConsumer>
          <Switch>
            <Route exact path="/">
              <MainPage />
              <Footer />
            </Route>
            <Route path="/passes">
              <Tours />
            </Route>
            <Route exact path="/merch">
              <Merchs />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/webPlayer">
              <WebPlayer />
              <Footer />
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
