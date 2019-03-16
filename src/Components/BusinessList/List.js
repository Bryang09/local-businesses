import React, { Component } from "react";

import { url, header, key } from "../../keys";

import axios from "axios";

import "./List.scss";

import ListItem from "./ListItem/ListItem";

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
    const { businesses } = this.state;
    console.log(this.state.businesses);

    const { query, zip } = this.props.match.params;
    return (
      <div className="List">
        <h1>Searching for results near {zip}</h1>
        <ListItem businesses={businesses} />
      </div>
    );
  }
}

export default List;
