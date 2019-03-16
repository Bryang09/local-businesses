import React, { Component } from "react";

import axios from "axios";

import { url, key } from "../../keys";

class Business extends Component {
  state = {
    business: []
  };

  componentDidMount = () => {
    const { id } = this.props.match.params;

    axios
      .get(`${url}/businesses/${id}`, {
        headers: { Authorization: `Bearer ${key}` }
      })
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.props);

    return (
      <div className="Business">
        <h1>Business</h1>
      </div>
    );
  }
}

export default Business;
