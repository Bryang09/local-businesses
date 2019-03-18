import React, { Component } from "react";

import axios from "axios";

import { url, key } from "../../keys";

import Image from "./Img/Image";

import "./Business.scss";

class Business extends Component {
  state = {
    business: ""
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    axios
      .get(`${url}/businesses/${id}`, {
        headers: { Authorization: `Bearer ${key}` }
      })
      .then(res => this.setState({ business: res.data }))
      .catch(err => console.log(err));
  };
  render() {
    const { business } = this.state;

    console.log(business);
    console.log(business === "");

    return (
      <div className="Business">
        {business !== "" ? <Image images={business} /> : <h1>Searching ...</h1>}
      </div>
    );
  }
}

export default Business;
