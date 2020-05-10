import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";
import OrderHistory from "./pages/OrderHistory";
import Tours from "./pages/Tours";
import { Route, Switch } from "react-router-dom";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import MainPage from "./pages/MainPage";
import Merchs from "./pages/Merchs";
import Cart from "./pages/Cart";
import { ContextConsumer } from "./components/Context";
import WebPlayer from "./pages/WebPlayer";
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
                </Switch>
              );
            }}
          </ContextConsumer>
          <Switch>
            <Route exact path="/">
              <Cloud />
              <MainPage />
            </Route>
            {/* <Route path="/orders">
              <OrderHistory />
            </Route> */}
            <Route path="/passes">
              <Tours />
            </Route>
            <Route path="/merch">
              <Merchs />
            </Route>

            <Route path="/login">
              <SignIn />
            </Route>
            <Route path="/signin">
              <SignIn />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
            <Route path="/webPlayer">
              <WebPlayer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
