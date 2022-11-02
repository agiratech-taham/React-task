import React from "react";
import Chart from "react-apexcharts";
import { Button, Typography } from "@mui/material";

const Bar2 = (props) => {
  const data = {
    options: {
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: ["Oct21", "Nov21", "Dec21", "Jan22"],
      },
    },
    series: [
      {
        name: "series-1",
        data: [120, 200, 100, 100],
      },
    ],
  };

  return (
    <div className="app">
      <div style={{ display: "flex" }}>
        <p style={{ fontSize: "0.7rem", color: "#043752" }}>Patients 12</p>
        {/* <button style={{ marginLeft: "8.5rem", width: "5rem" }}>Button</button> */}
        <Button
          variant="outlined"
          style={{
            color: "#043752",
            marginLeft: "10rem",
            width: "5rem",
          }}
          // variant="contained"
        >
          <Typography>Input</Typography>
        </Button>
      </div>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={data.options} series={data.series} type="bar" />
        </div>
      </div>
    </div>
  );
};

export default Bar2;
