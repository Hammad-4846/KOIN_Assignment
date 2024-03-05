import React from "react";
import { FaCircleInfo } from "react-icons/fa6";


import "./Performance.scss";
import MotionWrap from "../../Wrapper/MotionWrap";

function Performance() {
  return (
    <div className="performance__container">
      <div className="navigation__list-container">
        <div className="navigation__list">
          {[
            "Overview",
            "Fundamentals",
            "News Insights",
            "Sentiments",
            "Team",
          ].map((elem, id) => (
            <li key={id} className="nav__list">
              <a href="#">{elem}</a>
            </li>
          ))}
        </div>
      </div>

      <div className="performance__report">
        <h2>Performance</h2>

        <div className="prograce__bars">
          <div className="prograce_bar">
            <div className="prograce_bar-info">
              <h4>Today's Low</h4>
              <h4>46,930.22</h4>
            </div>
            <div className="bar">
              <div />
            </div>
            <div className="prograce_bar-info">
              <h4>Today's High</h4>
              <h4>49,930.22</h4>
            </div>
          </div>

          <div className="prograce_bar">
            <div className="prograce_bar-info">
              <h4>Today's Low</h4>
              <h4>46,930.22</h4>
            </div>
            <div className="bar">
              <div />
            </div>
            <div className="prograce_bar-info">
              <h4>Today's High</h4>
              <h4>49,930.22</h4>
            </div>
          </div>
        </div>

        <div className="performance__stats">
            <h2 className = "app__flex">Fundamentals  <FaCircleInfo/></h2>


            <div className="performance__stats-container">
                <div className="left__stats">
                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>
                    
                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                </div>
                <div className="right__stats">

                <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>
                    
                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                    <div className="info__field">
                        <p>Bitcoin Price</p>
                        <h4>$16,815.46</h4>
                    </div>

                </div>

            </div>
        </div>
      </div>
    </div>
  );
}

export default MotionWrap(Performance);
