import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const data = {
    labels: ["Test Taken", "Top Score", "Need to Improve"],
    datasets: [
      {
        label: "Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(235, 15, 63, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(124, 219, 30, 0.6)",
        ]
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div style={{ width: "60%", marginLeft:'25%',marginTop:'200px',height:'60%' }}>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
