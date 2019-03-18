import React from "react";

import "./Info.scss";

const Info = props => {
  const { info } = props;

  console.log(info);

  return (
    <div className="Info">
      <div className="infoContainer">
        <h1>
          {info.name}{" "}
          <span
            className={
              info.rating >= 3.6
                ? "great"
                : info.rating >= 3
                ? "average"
                : "bad"
            }
          >
            {info.rating} / 5
          </span>
        </h1>
        <h2>
          {info.location.display_address[0]}, {info.location.display_address[1]}
        </h2>
        <h3>{info.display_phone}</h3>
        <h3>
          Currently:{" "}
          <span
            style={
              info.is_closed
                ? { background: "red", color: "#fff" }
                : { background: "#42ec42", color: "#fff" }
            }
          >
            {info.is_closed ? "Closed" : "Open"}
          </span>
        </h3>
        <div
          className="button"
          style={info.messaging ? { display: "flex" } : { display: "none" }}
        >
          <a
            href={info.messaging ? `${info.messaging.url}` : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>Learn More</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Info;
