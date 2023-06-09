import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});


export default function PieChart() {
  const title = "Cloths";
  const chartData = [
    { label: "Basic Tees", value: 55 },
    { label: "Custom Short Pants", value: 31 },
    { label: "Super Hoodies", value: 14 },
  ];
  const chartColors = ["#98D89E", "#EE8484", "#F6DC7D"];

  const chartLabels = chartData.map((i) => i.label);

  const chartSeries = chartData.map((i) => i.value);

  const chartOptions = {
    chart: {
        width: 100,
        height: 100,
    },
    colors: chartColors,
    labels: chartLabels,
    // stroke: { colors: [theme.palette.background.paper] },
    legend: { floating: false, fontSize: '14px'},
    dataLabels: { enabled: true, dropShadow: { enabled: false } },
    // tooltip: {
    //   fillSeriesColor: false,
    //   y: {
    //     formatter: (seriesName) => fNumber(seriesName),
    //     title: {
    //       formatter: (seriesName) => `${seriesName}`,
    //     },
    //   },
    // },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        expandOnClick: true,
        offsetX: 0,
        offsetY: 0,
        // customScale: 1,
        dataLabels: {
          offset: 0,
          // minAngleToShowLabel: 10,
        },
        donut: { labels: { show: false } },
        // customScale: 1,
        // size: 1,
      },
    },
    stroke: {
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },

    responsive: [{
      breakpoint: 1000,
      options: {
        legend: { floating: false, position: 'bottom'},
      },
    }]
  

  };


  return (
      <ReactApexChart className='' type="pie" series={chartSeries} options={chartOptions} width="100%" height="100%" />
  );
}
