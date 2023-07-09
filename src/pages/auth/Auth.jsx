import React from "react";
import { Outlet } from "react-router-dom";
// import LoginSignUpImage from "src/assets/images/loginSignUp.jpg";
import LoginSignUpImage from "src/assets/images/loginSignUp.jpg";
function Auth() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        height: "100vh",
        width: "100%",
        flex: 1,
      }}
    >
      <img
        style={{ display: "flex", width: "50%" }}
        src={LoginSignUpImage}
        alt=""
      />

      <div style={{ display: "flex", width: "50%" }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
