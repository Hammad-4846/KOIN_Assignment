import React from "react";

import "./TokenNomic.scss";
import Chart from "../../Components/Chart/Dn";
import MotionWrap from "../../Wrapper/MotionWrap";

function TokenNomic() {
  return (
    <div className="tokennomic__container">
      <h2>TokenNomic</h2>

      <div className="token_chart">
        <h3>Initial Distribution</h3>

        <div className="chart__container">
          <div className="donut-chart">
            <Chart Correct={3} Incorrect={1} />
          </div>
        </div>
      </div>

      <p className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default MotionWrap(TokenNomic);
