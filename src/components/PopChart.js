import React, { Component } from "react";
import Chart from "react-apexcharts";

const theData = [
  {
    open: 28.56,
    close: 28.79,
    low: 28.48,
    high: 28.85,
    volume: 47623.46,
    _id: "61f60d57e9dbe740ac4edb25",
    date_time: "2022-01-30T04:00:00.000Z",
  },
  {
    open: 28.79,
    close: 28.63,
    low: 28.62,
    high: 28.93,
    volume: 178437.88,
    _id: "61f61ba4e9dbe740ac5905e2",
    date_time: "2022-01-30T05:00:00.000Z",
  },
  {
    open: 28.64,
    close: 28.63,
    low: 28.51,
    high: 28.7,
    volume: 160927.21,
    _id: "61f629b5e9dbe740ac62dea2",
    date_time: "2022-01-30T06:00:00.000Z",
  },
  {
    open: 28.64,
    close: 28.73,
    low: 28.58,
    high: 28.81,
    volume: 156090.14,
    _id: "61f6379de9dbe740ac6cba61",
    date_time: "2022-01-30T07:00:00.000Z",
  },
  {
    open: 28.74,
    close: 28.2,
    low: 28.08,
    high: 28.79,
    volume: 241323.23,
    _id: "61f645bfe9dbe740ac76c386",
    date_time: "2022-01-30T08:00:00.000Z",
  },
  {
    open: 28.21,
    close: 28.07,
    low: 28.03,
    high: 28.34,
    volume: 319866.97,
    _id: "61f653d4e9dbe740ac8170b9",
    date_time: "2022-01-30T09:00:00.000Z",
  },
  {
    open: 28.06,
    close: 28.4,
    low: 28.01,
    high: 28.41,
    volume: 140599.51,
    _id: "61f661bee9dbe740ac8c27aa",
    date_time: "2022-01-30T10:00:00.000Z",
  },
  {
    open: 28.38,
    close: 28.38,
    low: 28.19,
    high: 28.43,
    volume: 21717.9,
    _id: "61f66fe3e9dbe740ac97f49d",
    date_time: "2022-01-30T11:00:00.000Z",
  },
  {
    open: 28.36,
    close: 28,
    low: 27.82,
    high: 28.36,
    volume: 105921.95,
    _id: "61f67dd5e9dbe740aca52946",
    date_time: "2022-01-30T12:00:00.000Z",
  },
  {
    open: 27.98,
    close: 28.13,
    low: 27.91,
    high: 28.16,
    volume: 36627.58,
    _id: "61f68c2ce9dbe740acb21cb2",
    date_time: "2022-01-30T13:00:00.000Z",
  },
  {
    open: 28.12,
    close: 27.76,
    low: 27.43,
    high: 28.16,
    volume: 92572.44,
    _id: "61f69a31e9dbe740acbc929b",
    date_time: "2022-01-30T14:00:00.000Z",
  },
  {
    open: 27.77,
    close: 27.86,
    low: 27.64,
    high: 27.98,
    volume: 48494.56,
    _id: "61f6a83ce9dbe740acc7946f",
    date_time: "2022-01-30T15:00:00.000Z",
  },
  {
    open: 27.89,
    close: 27.75,
    low: 27.65,
    high: 28.1,
    volume: 54912.51,
    _id: "61f6b638e9dbe740acd29004",
    date_time: "2022-01-30T16:00:00.000Z",
  },
];

var readyData = [];
var element;
for (let i = 0; i < theData.length; i++) {
  readyData.push([
    new Date(theData[i].date_time).getTime(),
    theData[i].open,
    theData[i].low,
    theData[i].high,
    theData[i].close,
  ]);
}
console.log(readyData);

class PopChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          background: "f0f0f0",
          foreColor: "#333",
          animations: { enabled: false },
        },
        xaxis: {
          labels: {
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
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
          candlestick: {
            colors: {
              upward: "#20C020",
              downward: "#fF4D46",
            },
          },
        },
        fill: {
          colors: ["#6090f4"],
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
          name: "Atom",
          data: readyData,
        },
      ],
    };
  }

  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="candlestick"
        height="450"
        width="100%"
      />
    );
  }
}

export default PopChart;
