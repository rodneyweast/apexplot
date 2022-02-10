import React, { Component } from "react";
import Chart from "react-apexcharts";

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "f0f0f0",
          foreColor: "#333",
        },
        xaxis: {
          catagories: [
            new Date("2022-01-28T15:00:00.000Z"),
            new Date("2022-01-28T16:00:00.000Z"),
            new Date("2022-01-28T17:00:00.000Z"),
            new Date("2022-01-28T18:00:00.000Z"),
            new Date("2022-01-28T19:00:00.000Z"),
            new Date("2022-01-28T20:00:00.000Z"),
            new Date("2022-01-28T21:00:00.000Z"),
          ],
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        fill: {
          colors: ["#f44336"],
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "crypto data by date",
          align: "center",
          margin: 20,
          style: {
            fontSize: "25px",
          },
        },
      },
      series: [
        {
          name: "close",
          data: [29.15, 28.95, 28.22, 28.51, 28.31, 29.41, 29.43],
        },
      ],
    };
  }

  render() {
    return(
    <Chart
      options={this.state.options}
      series={this.state.series}
      type="bar"
      height="450"
      width="100%"
    />);
  }
}

export default PopChart;
