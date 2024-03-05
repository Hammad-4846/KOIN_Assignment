import React, { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";

import "./Header.scss";
import Chart from "../../Components/Chart/Chart";
import MotionWrap from "../../Wrapper/MotionWrap";

function Header() {
  const [data, setData] = useState({});
  const [coin, setCoin] = useState("bitcoin");
  const [graphView, setGraphView] = useState(false);

  setTimeout(() => {
    setGraphView(true);
  }, 3000);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coin}`
        );
        const json = await response.json();

        setData(json);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [coin]);

  return (
    <div className="header__container">
      <h3>
        {`Cryptocurrancies >>`}{" "}
        <span
          onClick={() => setCoin(coin == "bitcoin" ? "ethereum" : "bitcoin")}
        >
          {coin}
        </span>
      </h3>

      <div className="header__container-sections">
        <div className="header__container-section-left">
          <div className="section__left-upper">
            <div className="curr__img-rank">
              <div className="curr">
                <img src={data?.image?.small} alt="logo" />
                <h3>
                  {coin} <span>{data?.symbol}</span>
                </h3>
              </div>

              <h3 className="rank">Rank #1</h3>
            </div>
            <div className="curr__price-stat">
              <div className="curr__price">
                <h3>${data?.market_data?.current_price?.usd}</h3>
                <span className="changed_price">
                  ₹{data?.market_data?.current_price?.inr}
                </span>
              </div>

              <div className="curr_stat">
                <h3
                  style={{
                    backgroundColor:
                      Math.ceil(data?.market_data?.ath_change_percentage?.usd) >
                      0
                        ? "#0fba83"
                        : "#f7324c",
                  }}
                >
                  <FaCaretUp />
                  {data?.market_data?.ath_change_percentage?.usd.toFixed(2)}
                </h3>

                <span className="stat__time">(24H)</span>
              </div>
            </div>
          </div>
          <div className="section__left-down">
            {graphView && <Chart isBitCoin={coin == "bitcoin"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Header);
