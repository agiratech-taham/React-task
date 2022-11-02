import React from "react";
import Chart from "react-apexcharts";
import { Button, Typography } from "@mui/material";

const Donut1 = (props) => {
  const value = {
    options: {},
    series: [50, 50],
    labels: ["Walkin Order", "App Order"],
  };
  return (
    <div className="donut">
      <div style={{ display: "flex" }}>
        <p style={{ color: "#043752", fontSize: "0.7rem" }}>Total Order:100</p>
        {/* <button style={{ marginLeft: "7.8rem", width: "5rem" }}>Button</button> */}
        <Button
          variant="outlined"
          style={{
            color: "#043752",
            marginLeft: "8.5rem",
            width: "5rem",
          }}
          // variant="contained"
        >
          <Typography>Input</Typography>
        </Button>
      </div>
      <br />
      {/* <br /> */}
      <Chart options={value.options} series={value.series} type="donut" />
    </div>
  );
};

export default Donut1;
