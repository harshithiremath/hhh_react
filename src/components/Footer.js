import React from "react";

export default function Footer() {
  return (
    <div>
      <footer>
        <div className="foot">
          <a className="btn" href="#">
            <img
              src={require("./images/facebook-logo-yellow.png")}
              alt="facebook-logo"
              className="foot-head"
              width="20px"
              height="20px"
            />
            <img
              src={require("./images/facebook-logo.png")}
              alt="facebook-logo"
              className="foot-cap"
              width="20px"
              height="20px"
              top="10px"
            />
          </a>
          <a className="btn" href="#">
            <img
              src={require("./images/twitter-yellow.png")}
              alt="twitter-logo"
              className="foot-head"
              width="20px"
              height="20px"
            />
            <img
              src={require("./images/twitter.png")}
              alt="twitter-logo"
              className="foot-cap"
              width="20px"
              height="20px"
            />
          </a>
          <a className="btn" href="#">
            <img
              src={require("./images/search_yellow.png")}
              alt="google-logo"
              className="foot-head"
              width="20px"
              height="20px"
            />
            <img
              src={require("./images/search.png")}
              alt="google-logo"
              className="foot-cap"
              width="20px"
              height="20px"
            />
          </a>
          <a className="btn" href="#">
            <img
              src={require("./images/instagram-logo-yellow.png")}
              alt="insta-logo"
              className="foot-head"
              width="20px"
              height="20px"
            />
            <img
              src={require("./images/instagram-logo.png")}
              alt="google-logo"
              className="foot-cap"
              width="20px"
              height="20px"
            />
          </a>
          <a className="btn" href="#">
            <img
              src={require("./images/youtube-yellow.png")}
              alt="youtube-logo"
              className="foot-head"
              width="20px"
              height="20px"
            />
            <img
              src={require("./images/youtube.png")}
              alt="youtube-logo"
              className="foot-cap"
              width="20px"
              height="20px"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
