import React from "react";
import { FaCircleInfo } from "react-icons/fa6";

import "./Sentiments.scss";
import Carousel from "../../Components/Carousel/Carousel";
import MotionWrap from "../../Wrapper/MotionWrap";

function Sentiments() {
  return (
    <div className="sentiments__container">
      <h2>Sentiments</h2>

      <div className="sentiments__container-slider">
        <h2>
          Key Events <FaCircleInfo />
        </h2>

        <div className="slider__container">
          <Carousel
            cards={[
              {
                Icon: "fa-arrow-trend-up",
                title: "This is Dummy Title For the Card To Check The View",
                description:
                  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                bgColor: "#0fba83",
              },
              {
                Icon: "fa-arrow-trend-up",
                title: "This is Dummy Title For the Card To Check The View",
                description:
                  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                bgColor: "#0052fe",
              },
              {
                Icon: "fa-arrow-trend-up",
                title: "This is Dummy Title For the Card To Check The View",
                description:
                  "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
                bgColor: "#0fba83",
              },
            ]}
            cardWidth={400}
            cardsPerSlide={2}
          />
        </div>
      </div>

      <div className="estimates app__flex">
        <h2 className="app__flex">76%</h2>

        <div className="estimates__bars">
          <div className="estimate_bar-label">
            <p>Buy</p>
            <p>Hold</p>
            <p>Sell</p>
          </div>
          <div className="estimate_bar-inp">
            <div className="bar b1">
              <div />
              <p>76%</p>
            </div>
            <div className="bar b2">
              <div />
              <p>8%</p>
            </div>
            <div className="bar b3">
              <div />
              <p>16%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Sentiments);

