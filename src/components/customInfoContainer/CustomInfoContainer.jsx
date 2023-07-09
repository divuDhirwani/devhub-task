import React from "react";

function CustomInfoContainer({ name }) {
  return (
    <div>
      <div
        style={{
          width: "250px",
          height: "40px",

          borderRadius: "20px",
          padding: "10px",
          backgroundColor: "rgb(220, 223, 255)",
          outline: "none",
        }}
      >
        {name}
      </div>
    </div>
  );
}

export default CustomInfoContainer;