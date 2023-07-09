import React from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
function CustomInput({ name, style, placeholder = "placeholder", onChange }) {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "300px",
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <input
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        style={{
          ...style,
          borderRadius: "25px",
          outline: "none",
          border: "1px solid transparent",
          backgroundColor: "#DCDFFF",
          padding: "5px 12px",
          maxWidth: "300px",
          width: "100%",
          height: "40px",
        }}
        type="text"
      />
      <BsEye style={{ position: "absolute", right: 15, top: 18 }} />
      <BsEyeSlash style={{ position: "absolute", right: 15, top: 18 }} />
    </div>
  );
}

export default CustomInput;
