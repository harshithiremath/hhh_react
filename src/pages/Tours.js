import React from "react";
// import tourData from "./toursData";
import Tour from "./Tour";
import axios from "axios";
class Tours extends React.Component {
  /*
    // This data will be queried from Tours Table
  */
  state = {
    tours: [],
  };
  componentDidMount() {
    axios.get("/tours").then((res) => {
      const tours = res.data;
      // console.log(res.data);
      this.setState({ tours: tours });
    });
  }
  render() {
    const items = this.state.tours.map((item) => {
      return <Tour key={item.tour_id} item={item} />;
    });
    return (
      <div>
        <h2 className="h2_upcoming_tours">Upcoming tours of HHH</h2>
        <div className="tours_list">{items}</div>
      </div>
    );
  }
}
export default Tours;
