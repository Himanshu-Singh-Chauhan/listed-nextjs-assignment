import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import {
  // Chart as ChartJS, // not working for some reason
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

export default function Graph() {
  const data = {
    labels: ["", "Week1", "Week2", "Week3", "Week4", ""],
    datasets: [
      {
        // labels: 'Activities',
        data: [100, 420, 150, 450, 180, 250],
        backgroundColor: "aqua",
        // borderColor: '#9BDD7C',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    animation: {
      duration: 0,
    },
  };



  return (
    <div className="flex justify-center bg-white rounded-3xl m-6 m p-6 h-80">
      {/* <h1 className="font-bold">Graph here.</h1> */}
      <div className="">
        <Line data={data} options={options}></Line>
        {/* <Pie
            data={pdata}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          /> */}
      </div>
    </div>
  );
}
