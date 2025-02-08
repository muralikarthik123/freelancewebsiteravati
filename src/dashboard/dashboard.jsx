import React,{useState} from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraph = () => {
  const [data1,setData1]=useState('')
  const[data2,setData2]=useState(0)
  const num1=()=>{
    setData2(1)
  }
  const num2=()=>{
    setData2(2)
  }
  const num3=()=>{
    setData2(3)
  }
  const num4=()=>{
    setData2(4)
  }
  const add=()=>{
    var a=0
    var n=data2
    a=n+a
    setData1(a)
  }
  const sub=()=>{
    setData1(data1-data1)
  }
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
      <div>
        {data1}
        <button onClick={add}>+</button>
        <button onClick={sub}>-</button>
        <button onClick={num1}>1</button>
        <button onClick={num2}>2</button>
        <button onClick={num3}>3</button>
        <button onClick={num4}>4</button>
      </div>
    </div>
  );
};

export default BarGraph;