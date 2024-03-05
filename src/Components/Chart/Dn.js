import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const MyChart = ({
  Correct,
  Incorrect,
}) => {
  const chartRef = useRef(null);
  const data = {
    labels: ["Crowdsale Investors : 80%", "Foundation 20%"],
    datasets: [
      {
        label: "Distribution",
        data: [Correct, Incorrect],
        backgroundColor: ["#0082ff","#faa002"],
        hoverOffset: 4,
      },
    ],
  };

  useEffect(() => {
    const canvas = document.getElementById("myCanvas");
    const context = canvas.getContext("2d");
    const chart = new Chart(context, {
      type: "doughnut", // Specify chart type (e.g., 'bar', 'line', etc.)
      data: data, // Provide your chart data here (labels, datasets)
    });

    // Cleanup function to destroy the chart instance on unmount
    return () => chart.destroy();
  }, [chartRef, Incorrect, Correct]); // Re-render on data/type changes

  return (
    <div className="chart__Container flex ">
      <div className="w-[15rem] flex justify-end">
        <canvas ref={chartRef} id={"myCanvas"} />
      </div>
    </div>
  );
};

export default MyChart;
