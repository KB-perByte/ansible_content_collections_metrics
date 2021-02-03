import { Bar } from "react-chartjs-2";

const BarGraph = ({ dataGroupedByMonth: data, label1, label2, heading }) => {
  console.log(data);
  const dataToPlot = {
    labels: data.map((item) => item.Month),
    datasets: [
      {
        label: label1,
        fill: true,
        lineTension: 0.1,
        backgroundColor: "blue",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map((item) => {
          return item.open;
        }),
      },
      {
        label: label2,
        fill: true,
        lineTension: 0.1,
        backgroundColor: "red",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: data.map((item) => {
          return label2 === "Closed Issue" ? item.closed : item.merged;
        }),
      },
    ],
  };

  return (
    <div className="chart-test">
      <div className="chart">
        <h4>{heading}</h4>
        <Bar data={dataToPlot} />
      </div>
    </div>
  );
};

export default BarGraph;
