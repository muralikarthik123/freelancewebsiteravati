import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: [ "May", "June","july"],
    datasets: [
      {
        label: "Sales",
        data: [ 5, 2, 3],
        backgroundColor: "hsl(38,92%,50%)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Monthly Sales Data",
      },
    },
  };

  return (
    <div style={{ width: "80%", marginTop: "10%",marginLeft: "10%" ,height:"80%"}}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default BarGraph;