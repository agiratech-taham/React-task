import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";
class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [50, 50],
      labels: ["Working Order", "App Order"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Button variant="outlined" style={{ marginLeft: "12rem" }}>
          Button
        </Button>
        <h3 style={{ marginRight: "10rem" }}>Total Orders: 100</h3>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          width="300"
        />
      </div>
    );
  }
}

export default Donut;
