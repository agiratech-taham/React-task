import React, { useState } from "react";

function Datepick() {
  const [date, setDate] = useState();
  console.log("Date", date);
  return (
    <>
      <input
        style={{
          fontSize: "11px",
          backgroundColor: "rgb(213, 216, 222)",
          marginLeft: "7rem",
          background: "rgba(4, 55, 82, 0.2)",
        }}
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />
    </>
  );
}

export default Datepick;
