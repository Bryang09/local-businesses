import React, { Component } from "react";

import { key, url } from "../../keys";

import axios from "axios";

import "./Landing.scss";

import Hero from "./Hero/Hero";
import Nav from "../Nav/Nav";

class Landing extends Component {
  state = {
    zip: "",
    search: "",
    suggestions: [],
    value: ""
  };

  onZip = e => {
    e.preventDefault();

    this.setState({ zip: e.target.value });
  };

  onSearch = e => {
    e.preventDefault();

    this.setState({ search: e.target.value });
  };

  onSubmit = () => {
    const { zip, search } = this.state;

    axios
      .get(`${url}/autocomplete?text=${search}&location=${zip}`, {
        headers: { Authorization: `Bearer ${key}` }
      })
      .then(res => this.setState({ suggestions: res.data.terms }))
      .catch(err => console.log(err));
  };

  onValue = value => {
    this.setState({ value: value });
  };

  render() {
    const { zip, search, suggestions, value } = this.state;

    return (
      <div className="Landing">
        <Nav />
        <Hero
          zip={zip}
          search={search}
          value={value}
          onZip={this.onZip}
          onSearch={this.onSearch}
          suggestions={suggestions}
          onValue={this.onValue}
          submit={this.onSubmit}
        />
      </div>
    );
  }
}

export default Landing;
