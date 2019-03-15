import React, { Component } from "react";

import { url, header, key } from "../../keys";

import axios from "axios";

class List extends Component {
  state = {
    businesses: []
  };
  componentDidMount = () => {
    const { query, zip } = this.props.match.params;

    axios
      .get(`${url}/businesses/search?term=${query}&location=${zip}`, {
        headers: { Authorization: `Bearer ${key}` }
      })
      .then(res => this.setState({ businesses: res.data.businesses }))
      .catch(err => console.log(err));
  };
  render() {
    console.log(this.state.businesses);

    return (
      <div className="List">
        <h1>List</h1>
      </div>
    );
  }
}

export default List;
