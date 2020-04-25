import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";
import OrderHistory from "./pages/OrderHistory";
import Tours from "./pages/Tours";
import { Route, Switch } from "react-router-dom";
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
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
