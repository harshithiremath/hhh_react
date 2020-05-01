import React from "react";
const AppContext = React.createContext();
function Tour(props) {
  /*
    This function will return single tour items in the tourslist
    The props passed, should have an 'item'
    This data will be queried from Tours Table
    item object will have, 'tour_id', 'tour_name', 'location', 'time', 'price', 'tours_limit'
    */
  //The function that determines if available/selling fast should be output
  let text1 = "";
  let fast = false;
  if (props.item.tours_limit < 100) {
    text1 = "Selling out fast!";
    fast = true;
  } else {
    text1 = "Available";
  }

  // function handleClick(e) {
  //   console.log(e);

  //   return null;

  //   //props.func(e);
  // }
  return (
    <div className="tour" style={{ fontSize: 25 }}>
      <img
        src={require("./images/pass.png")}
        alt="pass"
        style={{
          width: 140,
          background: "#ddd",
          border: "1px solid #888",
          borderRadius: 4,
        }}
      />
      <h1 style={{ color: "#222f3e" }}>{props.item.tour_name}</h1>
      <div className="tourLower">
        <h3 style={{ color: "#222f3e", paddingTop: 20 }}>
          {props.item.location}
        </h3>
        <h5 style={{ color: "#222f3e" }}>{props.item.time}</h5>
        <h4 style={{ color: "#222f3e", paddingTop: 8 }}>
          Rs. {props.item.price}
        </h4>
        {fast ? <h6 style={{ color: "red" }}>{text1}</h6> : <h6>{text1}</h6>}
        <AppContext.Consumer value={AppContext}>
          {() => <button className="buy-btn">BUY</button>}
        </AppContext.Consumer>
      </div>
    </div>
  );
}

export default Tour;
