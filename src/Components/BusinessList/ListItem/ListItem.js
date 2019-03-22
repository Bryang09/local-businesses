import React from "react";

import "./ListItem.scss";

import { Link } from "react-router-dom";

const ListItem = props => {
  const { businesses } = props;

  const item = businesses.map(res => {
    return (
      <div className="ListItem" key={res.id}>
        <Link to={`/${res.id}`}>
          <div
            className="img"
            style={{ backgroundImage: `url(${res.image_url})` }}
          >
            <div
              className="rating"
              style={
                res.rating >= 4
                  ? { background: "#15c515db" }
                  : res.rating >= 3
                  ? { background: "#d8e23bdb" }
                  : res.rating <= 2.9
                  ? { background: "#fb2828db" }
                  : null
              }
            >
              <h5>{res.rating}/5</h5>
            </div>
          </div>
        </Link>
        <div className="info">
          <div className="infoContainer">
            <h3>{res.name}</h3>
            <h4>
              {res.location.display_address[0]},{" "}
              {res.location.display_address[1]}
            </h4>
            <h4>{res.display_phone}</h4>
            <h4>Price Range: {res.price ? res.price : "n/a"}</h4>
          </div>
        </div>
      </div>
    );
  });

  return <div className="ListItems">{item}</div>;
};

export default ListItem;
