import React from "react";

import "./About.scss";
import images from "../../Constants/images";
import { FaArrowRight } from "react-icons/fa6";
import MotionWrap from "../../Wrapper/MotionWrap";

function About() {
  return (
    <div className="about__container">
      <div className="about__container-upper">
        <h2>About Bitcoin</h2>

        <div className="about__info">
          <h3>What is Bitcoin?</h3>
          <p>
            Bitcoin, the pioneering cryptocurrency, has revolutionized the
            financial landscape. It operates on a decentralized network, powered
            by blockchain technology. Created by the pseudonymous Satoshi
            Nakamoto in 2008, Bitcoin offers a peer-to-peer electronic cash
            system, eliminating the need for intermediaries like banks. Its
            limited supply of 21 million coins, deflationary nature, and
            cryptographic security make it a sought-after digital asset.
            Bitcoin's price volatility and potential for high returns have
            attracted investors worldwide, sparking both enthusiasm and
            skepticism. Despite regulatory challenges and scalability concerns,
            Bitcoin continues to gain mainstream acceptance, with major
            corporations and institutional investors embracing its potential as
            a store of value and hedge against inflation.
          </p>
        </div>

        <div className="about__info">
          <h3>Lorem Inpsum dolor sit amet</h3>
          <div className="about__info-para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>

      <div className="about__container-bottom">
        <h2>Already Holding Bitcoin?</h2>

        <div className="cards__section">
          <div className="card c-1">
            <img src={images.Training} alt="training" />

            <div className="card__info">
              <h3>Calculate your Bit Profits</h3>

              <a className="btn app__flex" href="#">
                Check Now <FaArrowRight />
              </a>
            </div>
          </div>

          <div className="card c-2">
            <img src={images.Training} alt="training" />

            <div className="card__info">
              <h3>Calculate your Tax Liability</h3>

              <a className="btn app__flex" href="#">
                Check Now <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>

      <p className="text">
        Bitcoin, the pioneering cryptocurrency, has revolutionized the financial
        landscape. It operates on a decentralized network, powered by blockchain
        technology. Created by the pseudonymous Satoshi Nakamoto in 2008,
        Bitcoin offers a peer-to-peer electronic cash system,
      </p>
    </div>
  );
}

export default MotionWrap(About);
