import React from "react";
import tourData from "./toursData";
import Tour from "./Tour";
import axios from "axios";
class Tours extends React.Component {
  /*
    This data will be queried from Tours Table
  */
  state = {
    tours: [],
  };
  componentDidMount() {
    axios.get("localhost:5000/tours").then((res) => {
      const tours = res.data;
      this.setState({ tours: tours });
    });
  }
  render() {
    const items = this.state.tours.map((item) => {
      return <Tour key={item.id} item={item} />;
    });
    return (
      <div>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            textTransform: "uppercase",
            fontSize: 40,
            color: "#ffa801",
          }}
        >
          Upcoming tours of HHH
        </h2>
        <div className="tours_list">{items}</div>
      </div>
    );
  }
}
export default Tours;
