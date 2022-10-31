import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Button } from "@mui/material";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994],
        },
      },
      series: [
        {
          name: "series-1",
          data: [40, 50, 30, 31],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Button variant="outlined" style={{ marginLeft: "12rem" }}>
              Button
            </Button>
            <h3 style={{ marginRight: "10rem" }}>Onboard 200</h3>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="300"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
