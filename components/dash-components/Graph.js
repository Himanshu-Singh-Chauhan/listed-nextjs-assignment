import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

export default function Graph() {
  

  const title = "Activities";
  // const subheader = "(+43%) than last year";
  const chartLabels = ["", "Week 1", "Week 2", "Week 3", "Week 4", ""];

  const chartData = [
    {
      name: "Guest",
      type: "line",
      fill: "solid",
      data: [100, 380, 200, 300, 160, 450],
    },
    {
      name: "User",
      type: "line",
      fill: "solid",
      data: [200, 150, 350, 180, 350, 200],
    },
  ];

  const chartOptions = {
    plotOptions: { bar: { columnWidth: "16%" } },
    fill: {
      type: chartData.map((i) => i.fill),
      opacity: 1,
      gradient: {
        type: 'vertical',
        shadeIntensity: 0,
        opacityFrom: 0.9,
        opacityTo: 0,
        stops: [0, 100],
      },
    },
    labels: chartLabels,
    xaxis: { type: "datetime" },
    colors: ["#9BDD7C", "#E9A0A0"],
    chart: {
      background: "#fff",
      toolbar: {
        show: true,
        offsetX: 0,
        offsetY: 0,
        tools: {
          download: false,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: [],
        },
      },
      offsetY: 0
    },

    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (y) => {
          if (typeof y !== "undefined") {
            return `${y.toFixed(0)} visits`;
          }
          return y;
        },
      },
    },
    stroke: {
      width: 3,
      curve: "smooth",
      lineCap: "round",
    },

    // States
    states: {
      hover: {
        filter: {
          type: "lighten",
          value: 0.04,
        },
      },
      active: {
        filter: {
          type: "darken",
          value: 0.88,
        },
      },
    },

    // Datalabels
    dataLabels: { enabled: false },

    grid: {
      strokeDashArray: 0,
      borderColor: "#EAEAEA",
      xaxis: {
        lines: {
          show: false,
        },
      },
      padding: {
        top: 0,
        right: 30,
        bottom: 0,
        left: 30,
      },
    },

    // Xaxis
    xaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        showDuplicates: false,
        trim: false,
        minHeight: undefined,
        maxHeight: 120,
        style: {
          colors: [
            "#858585",
            "#858585",
            "#858585",
            "#858585",
            "#858585",
            "#858585",
            "#858585",
          ],
          fontSize: "12px",
          // fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: {
        show: true,
        hideOverlappingLabels: true,
        style: {
          colors: ["#858585"],
          fontSize: "12px",
          fontFamily: "Helvetica, Arial, sans-serif",
          fontWeight: 400,
          cssClass: "apexcharts-yaxis-label",
        },
      },
    },

    // Markers
    markers: {
      size: 0,
      // strokeColors: theme.palette.background.paper,
    },

    // Tooltip
    tooltip: {
      x: {
        show: false,
      },
    },

    // Legend
    legend: {
      show: true,
      fontSize: String(13),
      position: "top",
      horizontalAlign: "right",
      // offsetY: 40,
      markers: {
        radius: 12,
      },
      fontWeight: 300,
      itemMargin: { horizontal: 12, vertical: 0 },
      labels: {
        colors: "000",
      },
    },

    // // plotOptions
    // plotOptions: {
    //   // Bar
    //   bar: {
    //     borderRadius: 4,
    //     columnWidth: '28%',
    //     borderRadiusApplication: 'end',
    //     borderRadiusWhenStacked: 'last',
    //   },

    //   // Pie + Donut
    //   pie: {
    //     donut: {
    //       labels: {
    //         show: true,
    //         value: LABEL_VALUE,
    //         total: LABEL_TOTAL,
    //       },
    //     },
    //   },

    //   // Radialbar
    //   radialBar: {
    //     track: {
    //       strokeWidth: '100%',
    //       background: alpha(theme.palette.grey[500], 0.16),
    //     },
    //     dataLabels: {
    //       value: LABEL_VALUE,
    //       total: LABEL_TOTAL,
    //     },
    //   },

    //   // Radar
    //   radar: {
    //     polygons: {
    //       fill: { colors: ['transparent'] },
    //       strokeColors: theme.palette.divider,
    //       connectorColors: theme.palette.divider,
    //     },
    //   },

    //   // polarArea
    //   polarArea: {
    //     rings: {
    //       strokeColor: theme.palette.divider,
    //     },
    //     spokes: {
    //       connectorColors: theme.palette.divider,
    //     },
    //   },
    // },

    // // Responsive
    // responsive: [
    //   {
    //     // sm
    //     breakpoint: theme.breakpoints.values.sm,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '40%' } },
    //     },
    //   },
    //   {
    //     // md
    //     breakpoint: theme.breakpoints.values.md,
    //     options: {
    //       plotOptions: { bar: { columnWidth: '32%' } },
    //     },
    //   },
    // ],
  };
  return (
    <main>
      {/* <main className="flex min-h-screen flex-col items-center justify-between p-24"> */}
      <div className="mt-4 px-4 pt-4 rounded-xl bg-white">
        <div className="text-black px-4 font-medium text-xl font-bold">
          Activites
        </div>
        <button
          id="dropdownHoverButton"
          data-dropdown-toggle="dropdownHover"
          data-dropdown-trigger="hover"
          class="text-[#858585] hover:text-black  hover:bg-slate-200 font-medium rounded-lg text-sm px-4 py-1.5 text-center inline-flex items-center"
          type="button"
        >
          May - June 2021{" "}
          <svg
            class="w-4 h-4 ml-2"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
        <div
          id="dropdownHover"
          class="z-100 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Dashboard
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Settings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Earnings
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Sign out
              </a>
            </li>
          </ul>
        </div>

        {typeof window !== "undefined" && (
        <ReactApexChart
          type="line"
          series={chartData}
          options={chartOptions}
          height={280}
        />
      )}
      </div>
    </main>
  );
  
  
}