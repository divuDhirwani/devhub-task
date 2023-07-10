import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
function CustomInput({
  name,
  style,
  placeholder = "placeholder",
  onChange,
  errorMessage,
  type = "text",
  defaultValue = "",
  isDisabled = false,
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        maxWidth: "270px",
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        ...style,
      }}
    >
      <input
        disabled={isDisabled}
        defaultValue={defaultValue}
        type={type === "text" ? "text" : showPassword ? "text" : "password"}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        style={{
          borderRadius: "25px",
          outline: "none",
          border: "1px solid transparent",
          backgroundColor: "#DCDFFF",
          padding: "5px 12px",
          maxWidth: "300px",
          width: "100%",
          height: "40px",
        }}
      />
      {type === "password" ? (
        <>
          {showPassword ? (
            <BsEyeSlash
              style={{
                position: "absolute",
                right: 15,
                top: 18,
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <BsEye
              style={{
                position: "absolute",
                right: 15,
                top: 18,
                cursor: "pointer",
              }}
              onClick={() => setShowPassword(true)}
            />
          )}
        </>
      ) : null}
      {errorMessage && (
        <div
          style={{
            maxWidth: "300px",
            width: "100%",
            color: "red",
            fontSize: "13px",
          }}
        >
          {errorMessage}
        </div>
      )}
    </div>
  );
}

export default CustomInput;
