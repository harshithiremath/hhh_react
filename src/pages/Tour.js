import React from "react";
function Tour(props) {
  /*
    This function will return single tour items in the tourslist
    The props passed, should have an 'item'
    This data will be queried from Tours Table
    item object will have, 'tour_id', 'name', 'location', 'timing', 'price', 'no_passes'
    */
  let text1 = "";
  let fast = false;
  if (props.item.no_passes < 100) {
    text1 = "Selling out fast!";
    fast = true;
  } else {
    text1 = "Available";
  }
  function handleClick(e) {
    props.func(e);
  }
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
      <h1 style={{ color: "#222f3e" }}>{props.item.name}</h1>
      <div className="tourLower">
        <h3 style={{ color: "#222f3e", paddingTop: 20 }}>
          {props.item.location}
        </h3>
        <h5 style={{ color: "#222f3e" }}>{props.item.timing}</h5>
        <h4 style={{ color: "#222f3e", paddingTop: 8 }}>
          Rs. {props.item.price}
        </h4>
        {fast ? <h6 style={{ color: "red" }}>{text1}</h6> : <h6>{text1}</h6>}
        <button onClick={(e) => handleClick(e)} className="buy-btn">
          BUY
        </button>
      </div>
    </div>
  );
}

export default Tour;
