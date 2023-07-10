import React from "react";

function CustomInfoContainer({ name, value }) {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "40px",

          borderRadius: "10px",
          padding: "15px",
          backgroundColor: "rgb(220, 223, 255)",
          outline: "none",
          fontWeight: "bold",
          fontFamily: "sans-serif",
        }}
      >
        {name}
        <div style={{ fontWeight: "lighter" }}>{value}</div>
      </div>
    </div>
  );
}

export default CustomInfoContainer;
