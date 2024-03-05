import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Header from "./Container/Header/Header";
import AddCard from "./Components/Cards/addCard/Card";
import CoinCard from "./Components/Cards/trendingCoin/Card";
import Performance from "./Container/Performance/Performance";
import Sentiments from "./Container/Sentiments/Sentiments";
import About from "./Container/About/About";
import TokenNomic from "./Container/TokenNomic/TokenNomic";
import Team from "./Container/Team/Team";
import Crypto from "./Container/Crypo/Crypto";

function App() {
  const [coinsDetail, setCoinsDetail] = useState([]);
  const [graphData, setGraphData] = useState([]);
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const data = await fetch(
          "https://api.coingecko.com/api/v3/search/trending"
        );
        const jsonData = await data.json();
        console.log(jsonData);
        const topTrendingCoin = jsonData.coins.slice(0, 3);
        setGraphData(jsonData.coins);
        setCoinsDetail(topTrendingCoin);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingCoins();
  }, []);
  return (
    <div className="app__container">
      <Navbar />

      <div className="app__container-grid">
        <div className="containers ">
          <Header />
          <Performance />
          <Sentiments />
          <About />
          <TokenNomic />
          <Team />
        </div>

        <div className="cards__container">
          <AddCard />
          <CoinCard coinsDetail={coinsDetail} />
        </div>
      </div>

      <div className="crypto__container">
        <Crypto graphData={graphData}/>
      </div>
    </div>
  );
}

export default App;
