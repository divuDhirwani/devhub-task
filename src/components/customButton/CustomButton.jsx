import React from "react";

function CustomButton({ name, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        borderRadius: "25px",
        outline: "none",
        border: "1px solid transparent",
        backgroundColor: "#2412E4",
        cursor: "pointer",
        maxWidth: "290px",
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
