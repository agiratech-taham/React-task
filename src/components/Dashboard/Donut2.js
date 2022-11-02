import React from "react";
import Chart from "react-apexcharts";
import { Button, Typography } from "@mui/material";

const Donut2 = (props) => {
  const value = {
    options: {},
    series: [44, 55, 41, 17],
    labels: ["Cash", "DebitCard", "CreditCard", "Others"],
  };
  return (
    <div className="donut">
      <div style={{ display: "flex" }}>
        <p style={{ color: "#043752", fontSize: "0.7rem" }}>Collection</p>
        {/* <button style={{ marginLeft: "10rem", width: "5rem" }}>Button </button> */}
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
      <br />
      {/* <br /> */}
      <Chart options={value.options} series={value.series} type="donut" />
    </div>
  );
};

export default Donut2;
