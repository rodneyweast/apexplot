import React, {Component} from "react";
import Chart from "react-apexcharts";

// https://www.freecodecamp.org/news/pass-data-between-components-in-react/#:~:text=First%2C%20you'll%20need%20to,one%20parent%20and%20one%20child.&text=Next%2C%20you'll%20import%20the,parent%20component%20and%20return%20it.&text=Then%20you'll%20create%20a,Hook%20to%20manage%20the%20data.


class PlotData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: this.props.plotOptions,
      series: this.props.plotSeries,
    };
  }
  
  render() {
    // console.log('PlotChart: ',this.state.options)
    // console.log('PlotChart: ',this.state.series)
   
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

export default PlotData;
