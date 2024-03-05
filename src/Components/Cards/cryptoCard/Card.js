import React from "react";

import "./Card.scss";

function Card({ name, priceChange, price, graph, logo }) {
  return (
    <div className="Crtpto_Card">
      <div className="coin_info">
        <img src={logo} alt="logo" />
        <p>{name.slice(0, 10)}</p>
        <p
          className="price_change"
          style={{
            backgroundColor: Math.ceil(priceChange) > 0 ? "#0fba83" : "#f7324c",
          }}
        >
          {Math.ceil(priceChange)}%
        </p>
      </div>

      <h3>{price}</h3>

      <div className="graph__container">
        <img src={graph} alt="graph" />
      </div>
    </div>
  );
}

export default Card;
