import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cloud from "./components/Cloud";
import OrderHistory from "./pages/OrderHistory";
import { Route, Switch } from "react-router-dom";
class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="banner">
          <Switch>
            <Route exact path="/">
              <Cloud />
            </Route>
            <Route exact path="/orders">
              <OrderHistory />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
