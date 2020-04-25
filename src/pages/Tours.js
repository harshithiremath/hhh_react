import React from "react";
import tourData from "./toursData";
import Tour from "./Tour";
class Tours extends React.Component {
  /*
    This data will be queried from Tours Table
    */
  constructor() {
    super();
    this.state = {
      tours: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      tours: 1,
    });
    console.log(this.state);
  }

  render() {
    const items = tourData.map((item) => {
      return <Tour key={item.id} item={item} func={this.handleClick} />;
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
