import React, { Component } from "react";

import { key } from "../../keys";

import axios from "axios";

import "./Landing.scss";

import Hero from "./Hero/Hero";

class Landing extends Component {
  state = {
    zip: "",
    search: "",
    suggestions: []
  };

  onZip = e => {
    e.preventDefault();

    this.setState({ zip: e.target.value });
  };
  onSearch = e => {
    e.preventDefault();

    const { zip, search } = this.state;
    // const header = `Authorization`: `Bearer Token ${key}`;
    const proxy = "https://cors-anywhere.herokuapp.com/";

    this.setState({ search: e.target.value });

    axios
      .get(
        `${proxy}https://api.yelp.com/v3/autocomplete?text=${search}&location=${zip}`,
        { headers: { Authorization: `Bearer ${key}` } }
      )
      .then(res => this.setState({ suggestions: res.data.terms }))
      .catch(err => console.log(err));
  };

  render() {
    const { zip, search, suggestions } = this.state;

    console.log(suggestions);

    return (
      <div className="Landing">
        <Hero
          zip={zip}
          search={search}
          onZip={this.onZip}
          onSearch={this.onSearch}
          suggestions={suggestions}
        />
      </div>
    );
  }
}

export default Landing;
