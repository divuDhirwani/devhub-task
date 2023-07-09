import React from "react";

function CustomButton({ name }) {
  return (
    <button
      style={{
        borderRadius: "25px",
        outline: "none",
        border: "1px solid transparent",
        backgroundColor: "#2412E4",
        // padding: "50px 10px",
        maxWidth: "320px",
        width: "100%",
        minHeight: "50px",
        color: "#DCDFFF",
      }}
    >
      {name}
    </button>
  );
}

export default CustomButton;
