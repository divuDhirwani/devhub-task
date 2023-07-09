import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInput from "src/components/customInput/CustomInput";
import routeNames from "src/constants/routeNames";
import UserImage from "src/assets/images/userImage.png";
// import Login from "./Login";

function Register() {
  const navigate = useNavigate();
  const { LOGIN, AUTH } = routeNames;
  const [userDetails, setUserDetails] = useState({
    image: null,
    firstName: "",
    lastName: "",
    age: null,
    mobileNumber: null,
    email: "",
    password: "",
  });
  console.log(userDetails);

  function handleChange(e) {
    if (e.target.type === "file") {
      if (e.target.files)
        setUserDetails((prev) => ({
          ...prev,
          image: URL.createObjectURL(e.target.files[0]),
        }));
    } else if (e.target.type === "text") {
      setUserDetails((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
    }
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        minHeight: "100vh",
        overflowY: "auto",
        borderLeft: "1px solid black",
        flexDirection: "column",
        // marginTop: "30px",
      }}
    >
      <div
        style={{ margin: "50px 0 20px 0", fontSize: "40px", color: "#2412E4" }}
      >
        Create an account !
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          position: "relative",
          border: "1px solid #000",
          borderRadius: "50%",
          minHeight: "80px",
          width: "80px",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <img
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
          src={userDetails?.image ? userDetails?.image : UserImage}
          alt=""
        />
        <input
          style={{
            height: "100%",
            width: "100%",
            borderRadius: "20px",
            position: "absolute",
            opacity: 0,
            zIndex: 2,
          }}
          type="file"
          onChange={handleChange}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomInput
          name="firstName"
          placeholder="First Name"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <CustomInput
          name="lastName"
          placeholder="Last Name"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <CustomInput
          name="age"
          placeholder="Age"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <CustomInput
          name="mobileNumber"
          placeholder="Mobile Number"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <CustomInput
          name="email"
          placeholder="Email"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
        />
      </div>
      <CustomButton name={"Register"} />

      <div style={{ margin: "10px" }}>
        Already have an account?
        <span
          style={{ color: "#2412E4", marginLeft: "5px", cursor: "pointer" }}
          onClick={() => navigate(`${AUTH}/${LOGIN}`)}
        >
          Login
        </span>
      </div>
    </div>
  );
}

export default Register;
