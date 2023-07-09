import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginEmailApi, loginMobileApi } from "src/apiServices/authService";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInput from "src/components/customInput/CustomInput";
import routeNames from "src/constants/routeNames";
import {
  updateAccessToken,
  updateUserDetails,
} from "src/redux/reducers/authReducer";

// import LoginSignUpImage from "../../assets/images/loginSignUp.jpg";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { REGISTER, AUTH } = routeNames;
  const [loginDetails, setLoginDetails] = useState({
    emailNumber: null,
    password: null,
  });
  const [error, setError] = useState({
    emailNumberError: "",
    passwordError: "",
  });

  const validation = () => {
    let emailNumberError = "";
    let passwordError = "";

    if (!loginDetails?.emailNumber) {
      emailNumberError = "Please enter a valid email/number";
    }
    if (!loginDetails?.password) {
      passwordError = "Please enter a valid password";
    }
    if (!!emailNumberError || !!passwordError) {
      setError({ emailNumberError, passwordError });
      return false;
    } else {
      return true;
    }
  };
  const callLogin = async () => {
    // let res = loginMobileApi({ mobile: 9999999992, password: 123456 });
    let isValid = validation();
    try {
      if (isValid) {
        if (
          /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/.test(
            loginDetails?.emailNumber
          )
        ) {
          let res = await loginEmailApi({
            email: loginDetails?.emailNumber,
            password: loginDetails?.password,
          });
          dispatch(updateUserDetails(res));
          dispatch(updateAccessToken(res?.auth_token));
        } else {
          let res = await loginMobileApi({
            mobile: loginDetails?.emailNumber,
            password: loginDetails?.password,
          });
          dispatch(updateUserDetails(res));
          dispatch(updateAccessToken(res?.auth_token));
        }
      }
    } catch (error) {
      console.log("error from login", error);
    }
  };

  const handleChange = (e) => {
    setError({ emailNumberError: "", passwordError: "" });
    setLoginDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        borderLeft: "1px solid black",
        flexDirection: "column",
        // marginTop: "30px",
      }}
    >
      <div style={{ marginBottom: "50px", fontSize: "40px", color: "#2412E4" }}>
        Have an account?
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
          errorMessage={error?.emailNumberError}
          placeholder="Email/Number"
          style={{ marginBottom: "20px" }}
          onChange={handleChange}
          name="emailNumber"
        />
        <CustomInput
          type="password"
          errorMessage={error?.passwordError}
          placeholder="Password"
          style={{ marginBottom: "20px" }}
          name="password"
          onChange={handleChange}
        />
      </div>
      <CustomButton
        name={"Login"}
        // onClick={() => dispatch(updateAccessToken("token"))}
        onClick={callLogin}
      />

      <div style={{ marginTop: "10px" }}>
        Didn't have an account?
        <span
          style={{ color: "#2412E4", marginLeft: "5px", cursor: "pointer" }}
          onClick={() => navigate(`${AUTH}/${REGISTER}`)}
        >
          Register
        </span>
      </div>
    </div>
  );
}

export default Login;
