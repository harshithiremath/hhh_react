import React from "react";
// import tourData from "./toursData";
import Tour from "./Tour";
import axios from "axios";
import { Redirect } from "react-router-dom";
class Tours extends React.Component {
  /*
    // This data will be queried from Tours Table
  */

  constructor() {
    super();
    this.state = {
      tours: [],
    };
    this.toggleRedirect = this.toggleRedirect.bind(this);
  }
  renderRedirect() {
    if (this.state.redirectToSignin) {
      return <Redirect to="/signin" />;
    }
  }
  toggleRedirect() {
    this.setState({ redirectToSignin: true });
  }
  componentDidMount() {
    axios.get("http://localhost:5000/tours").then((res) => {
      const tours = res.data;
      // console.log(res.data);
      this.setState({ tours: tours });
    });
  }
  render() {
    const items = this.state.tours.map((item) => {
      return (
        <Tour
          toggleRedirect={this.toggleRedirect}
          key={item.tour_id}
          item={item}
        />
      );
    });
    return (
      <div>
        {this.renderRedirect()}
        <h2 className="h2_upcoming_tours" style={{ color: "#fec325" }}>
          Upcoming tours of HHH
        </h2>
        <div className="tours_list">{items}</div>
      </div>
    );
  }
}
export default Tours;
