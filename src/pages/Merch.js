import React from "react";
import { ContextConsumer } from "../components/Context";
import { Link } from "react-router-dom";
function Merch(props) {
  /*

  */
  //The function that determines if available/selling fast should be output
  let text1 = "";
  let fast = false;
  let soldOut = false;
  if (props.item.merch_limit === 0) {
    text1 = "Sold Out! :(";
    fast = true;
    soldOut = true;
  } else if (props.item.merch_limit < 10) {
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
      <Link to={`/merch/${props.item.merch_id}`}>
        <img
          src={`${props.item.image_url}`}
          alt="merch_image"
          style={{
            width: 180,
            background: "#ddd",
            borderRadius: 4,
          }}
        />
      </Link>
      <h1>
        <Link
          style={{ color: "#222f3e", textDecoration: "none" }}
          to={`/merch/${props.item.merch_id}`}
        >
          {props.item.merch_name}
        </Link>
      </h1>
      <div className="tourLower">
        <h5>
          <a
            style={{ color: "#868787", textDecoration: "none" }}
            href={`/merch/${props.item.merch_id}`}
          >
            {props.item.description.slice(0, 50)}...
          </a>
        </h5>
        <h4 style={{ color: "#222f3e", paddingTop: 8 }}>
          Rs. {props.item.price}
        </h4>
        {fast ? (
          <h6 style={{ color: "red" }}>{text1}</h6>
        ) : (
          <h6 style={{ color: "#a6a4a4" }}>{text1}</h6>
        )}
        {soldOut ? (
          <button className="buy-btn soldout">Sold Out</button>
        ) : (
          <ContextConsumer>
            {(context) => (
              <button
                onClick={() => {
                  context.signed_in
                    ? context.addToCart(props.item.merch_id)
                    : props.toggleRedirect();
                }}
                className="buy-btn"
              >
                Add to Cart
              </button>
            )}
          </ContextConsumer>
        )}
      </div>
    </div>
  );
}

export default Merch;
