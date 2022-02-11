import React, { Component } from "react";
import Chart from "react-apexcharts";

const theData = [
    {"open":28.74,"close":28.2,"low":28.08,"high":28.79,"volume":241323.23,"_id":"61f645bfe9dbe740ac76c386","date_time":"2022-01-30T08:00:00.000Z"},
    {"open":28.21,"close":28.07,"low":28.03,"high":28.34,"volume":319866.97,"_id":"61f653d4e9dbe740ac8170b9","date_time":"2022-01-30T09:00:00.000Z"},{"open":28.06,"close":28.4,"low":28.01,"high":28.41,"volume":140599.51,"_id":"61f661bee9dbe740ac8c27aa","date_time":"2022-01-30T10:00:00.000Z"},{"open":28.38,"close":28.38,"low":28.19,"high":28.43,"volume":21717.9,"_id":"61f66fe3e9dbe740ac97f49d","date_time":"2022-01-30T11:00:00.000Z"},{"open":28.36,"close":28,"low":27.82,"high":28.36,"volume":105921.95,"_id":"61f67dd5e9dbe740aca52946","date_time":"2022-01-30T12:00:00.000Z"},{"open":27.98,"close":28.13,"low":27.91,"high":28.16,"volume":36627.58,"_id":"61f68c2ce9dbe740acb21cb2","date_time":"2022-01-30T13:00:00.000Z"},{"open":28.12,"close":27.76,"low":27.43,"high":28.16,"volume":92572.44,"_id":"61f69a31e9dbe740acbc929b","date_time":"2022-01-30T14:00:00.000Z"},{"open":27.77,"close":27.86,"low":27.64,"high":27.98,"volume":48494.56,"_id":"61f6a83ce9dbe740acc7946f","date_time":"2022-01-30T15:00:00.000Z"},{"open":27.89,"close":27.75,"low":27.65,"high":28.1,"volume":54912.51,"_id":"61f6b638e9dbe740acd29004","date_time":"2022-01-30T16:00:00.000Z"},{"open":27.75,"close":27.94,"low":27.55,"high":27.97,"volume":51543.87,"_id":"61f6c467e9dbe740acdd9b89","date_time":"2022-01-30T17:00:00.000Z"},{"open":27.94,"close":27.85,"low":27.78,"high":28.21,"volume":53334.43,"_id":"61f6d236e9dbe740ace93837","date_time":"2022-01-30T18:00:00.000Z"},{"open":27.84,"close":26.69,"low":26.6,"high":27.85,"volume":256760.18,"_id":"61f6e077e9dbe740acf4f900","date_time":"2022-01-30T19:00:00.000Z"},{"open":26.7,"close":26.75,"low":26.45,"high":26.99,"volume":144438.72,"_id":"61f6ee74e9dbe740ac005ca0","date_time":"2022-01-30T20:00:00.000Z"},{"open":26.75,"close":26.7,"low":26.37,"high":26.95,"volume":118362.26,"_id":"61f6fc89e9dbe740ac0bea23","date_time":"2022-01-30T21:00:00.000Z"},{"open":26.7,"close":26.97,"low":26.62,"high":27.11,"volume":43498.27,"_id":"61f70a97e9dbe740ac16a1a0","date_time":"2022-01-30T22:00:00.000Z"},{"open":27,"close":27.19,"low":27,"high":27.49,"volume":80341.02,"_id":"61f71897e9dbe740ac20f533","date_time":"2022-01-30T23:00:00.000Z"},{"open":27.18,"close":26.08,"low":26.08,"high":27.32,"volume":136716.93,"_id":"61f726d9e9dbe740ac2b451c","date_time":"2022-01-31T00:00:00.000Z"},{"open":26.08,"close":26.07,"low":26.04,"high":26.35,"volume":86448.17,"_id":"61f734f3e9dbe740ac35a7ba","date_time":"2022-01-31T01:00:00.000Z"},{"open":26.08,"close":26.19,"low":25.63,"high":26.3,"volume":156714.62,"_id":"61f742f0e9dbe740ac3f9f27","date_time":"2022-01-31T02:00:00.000Z"},{"open":26.2,"close":26.02,"low":25.97,"high":26.26,"volume":46292.85,"_id":"61f75113e9dbe740ac495908","date_time":"2022-01-31T03:00:00.000Z"},{"open":26.03,"close":25.81,"low":25.51,"high":26.03,"volume":64642.37,"_id":"61f75ee8e9dbe740ac52d2bb","date_time":"2022-01-31T04:00:00.000Z"},{"open":25.79,"close":25.95,"low":25.71,"high":26.01,"volume":33504.59,"_id":"61f76ceee9dbe740ac5ce287","date_time":"2022-01-31T05:00:00.000Z"},{"open":25.94,"close":25.72,"low":25.72,"high":26.02,"volume":32933.33,"_id":"61f77b2ae9dbe740ac679a09","date_time":"2022-01-31T06:00:00.000Z"},{"open":25.73,"close":26.02,"low":25.69,"high":26.08,"volume":22241.45,"_id":"61f78935e9dbe740ac7228e1","date_time":"2022-01-31T07:00:00.000Z"},{"open":25.99,"close":26.1,"low":25.95,"high":26.3,"volume":23234.59,"_id":"61f79729e9dbe740ac7cf817","date_time":"2022-01-31T08:00:00.000Z"},{"open":26.08,"close":26.31,"low":25.95,"high":26.32,"volume":17634.85,"_id":"61f7a56ce9dbe740ac8815be","date_time":"2022-01-31T09:00:00.000Z"},{"open":26.31,"close":26.4,"low":26.1,"high":26.42,"volume":24511.75,"_id":"61f7b37ee9dbe740ac9355e5","date_time":"2022-01-31T10:00:00.000Z"},{"open":26.38,"close":26.31,"low":25.9,"high":26.43,"volume":37621.94,"_id":"61f7c18ae9dbe740ac9ee644","date_time":"2022-01-31T11:00:00.000Z"},{"open":26.29,"close":26.35,"low":25.9,"high":26.44,"volume":60178.18,"_id":"61f7cf5de9dbe740aca9ebc7","date_time":"2022-01-31T12:00:00.000Z"},{"open":26.34,"close":26.95,"low":26.1,"high":27.14,"volume":116248.63,"_id":"61f7dda8e9dbe740acb80172","date_time":"2022-01-31T13:00:00.000Z"},{"open":26.94,"close":27.85,"low":26.7,"high":27.87,"volume":108330.4,"_id":"61f7ebb2e9dbe740acc6340b","date_time":"2022-01-31T14:00:00.000Z"},{"open":27.86,"close":27.96,"low":27.64,"high":28.22,"volume":188324.55,"_id":"61f7f99ce9dbe740acd43214","date_time":"2022-01-31T15:00:00.000Z"},{"open":27.97,"close":28.87,"low":27.91,"high":28.96,"volume":159047.56,"_id":"61f807c2e9dbe740ace2533d","date_time":"2022-01-31T16:00:00.000Z"},{"open":28.86,"close":28.25,"low":28.25,"high":28.9,"volume":143071.84,"_id":"61f815a4e9dbe740acf12321","date_time":"2022-01-31T17:00:00.000Z"},{"open":28.25,"close":27.96,"low":27.84,"high":28.38,"volume":90367.11,"_id":"61f823bde9dbe740acff716c","date_time":"2022-01-31T18:00:00.000Z"},{"open":27.97,"close":28.08,"low":27.83,"high":28.27,"volume":99986.14,"_id":"61f831efe9dbe740ac0d0e59","date_time":"2022-01-31T19:00:00.000Z"},{"open":28.09,"close":27.93,"low":27.64,"high":28.16,"volume":96646.39,"_id":"61f83fe0e9dbe740ac1a18d3","date_time":"2022-01-31T20:00:00.000Z"},{"open":27.94,"close":28.23,"low":27.83,"high":28.8,"volume":261938.68,"_id":"61f84e30e9dbe740ac254993","date_time":"2022-01-31T21:00:00.000Z"},{"open":28.24,"close":28.13,"low":28.06,"high":28.4,"volume":56777.3,"_id":"61f85c35e9dbe740ac30aede","date_time":"2022-01-31T22:00:00.000Z"},{"open":28.11,"close":28.07,"low":27.87,"high":28.17,"volume":38617.69,"_id":"61f86a2ce9dbe740ac3b477a","date_time":"2022-01-31T23:00:00.000Z"},{"open":28.08,"close":28.8,"low":27.79,"high":28.92,"volume":228544.86,"_id":"61f8785ce9dbe740ac4650e1","date_time":"2022-02-01T00:00:00.000Z"},{"open":28.8,"close":28.49,"low":28.36,"high":28.84,"volume":85302.5,"_id":"61f8863ee9dbe740ac50e679","date_time":"2022-02-01T01:00:00.000Z"},{"open":28.48,"close":28.58,"low":28.3,"high":28.78,"volume":55009.44,"_id":"61f89461e9dbe740ac5afb7c","date_time":"2022-02-01T02:00:00.000Z"},{"open":28.58,"close":29.46,"low":28.48,"high":29.46,"volume":160450.57,"_id":"61f8a267e9dbe740ac652143","date_time":"2022-02-01T03:00:00.000Z"},
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
// console.log(readyData);

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
          type: "datetime",
          tickAmount: 'dataPoints',
          labels: {
            textAnchor: 'middle',
            datetimeFormatter: {
              year: "yyyy",
              month: "MMM 'yy",
              day: "dd MMM",
              hour: "HH:mm",
            },
          },
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
          text: "ATOM-USD",
          align: "Left",
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
