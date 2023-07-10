import React from "react";
import { Outlet } from "react-router-dom";
// import LoginSignUpImage from "src/assets/images/loginSignUp.jpg";
import LoginSignUpImage from "src/assets/images/loginSignUp.jpg";
import "./auth.css";

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
      <img src={LoginSignUpImage} alt="" className="auth_left_section" />

      <div className="auth_right_section">
        <Outlet />
      </div>
    </div>
  );
}

export default Auth;
