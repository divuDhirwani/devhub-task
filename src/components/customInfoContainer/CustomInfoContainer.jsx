import React from "react";

function CustomInfoContainer({ name, value }) {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "40px",

          borderRadius: "10px",
          padding: "10px",
          backgroundColor: "rgb(220, 223, 255)",
          outline: "none",
        }}
      >
        {name}
        <div>{value}</div>
      </div>
    </div>
  );
}

export default CustomInfoContainer;
