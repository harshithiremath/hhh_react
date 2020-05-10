import React, { Component } from "react";
import axios from "axios";
import Merch from "./merch.js";
export default class Merchs extends Component {
  state = {
    merch: [],
  };
  componentDidMount() {
    axios.get("http://localhost:5000/merch").then((res) => {
      console.log(res.data);
      let merchs = res.data;
      this.setState({ merch: merchs });
    });
  }

  render() {
    const items = this.state.merch.map((item) => (
      <Merch key={item.merch_id} item={item} />
    ));
    return <div>{items}</div>;
  }
}
