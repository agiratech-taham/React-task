import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";

class Donut extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [50, 50, 41, 17],
      labels: ["Cash", "Debit Card", "Credit Card", "Others"],
    };
  }

  render() {
    return (
      <div className="donut">
        <Button variant="outlined" style={{ marginLeft: "12rem" }}>
          Button
        </Button>
        <h3 style={{ marginRight: "10rem" }}>Collection</h3>
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
