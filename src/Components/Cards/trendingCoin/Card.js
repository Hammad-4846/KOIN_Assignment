import React, { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

import "./Card.scss";

function Card({ coinsDetail }) {
  return (
    <div className="coin__container">
      <h2>Trending Coins (24h)</h2>

      <div className="trending__coins">
        {coinsDetail?.map((coin) => (
          <div id={coin.item.coin_id} className="trending__coin" key={coin.item.coin_id}>
            <div className="coin__info">
              <img src={coin.item.small} alt="coin" />
              <h3>{coin.item.name.slice(0, 10)}</h3>
            </div>

            <div className="coin__stat">
              <h3
                style={{
                  backgroundColor:
                    Math.ceil(coin.item.data.price_change_percentage_24h.aed) > 0 ? "#0fba83" : "#f7324c",
                }}
              >
                <FaCaretUp />
                {Math.ceil(coin.item.data.price_change_percentage_24h.aed)}%
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default  Card;
