import { useNavigate } from "react-router-dom";
import CustomButton from "src/components/customButton/CustomButton";
import CustomInput from "src/components/customInput/CustomInput";
import routeNames from "src/constants/routeNames";

// import LoginSignUpImage from "../../assets/images/loginSignUp.jpg";
function Login() {
  const navigate = useNavigate();
  const { REGISTER, AUTH } = routeNames;
  // const dispatch = useDispatch();
  // const aaa = useSelector((s) => s?.authReducer?.accessToken);
  // console.log(aaa);

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
          placeholder="Email/Number"
          style={{ marginBottom: "20px" }}
        />
        <CustomInput placeholder="Password" style={{ marginBottom: "20px" }} />
      </div>
      <CustomButton name={"Login"} />

      <div style={{ marginTop: "10px" }}>
        Didn't have an account?
        <span
          style={{ color: "#2412E4", marginLeft: "5px" }}
          onClick={() => navigate(`${AUTH}/${REGISTER}`)}
        >
          Register
        </span>
      </div>
    </div>
  );
}

export default Login;
// {/* <button onClick={() => dispatch(updateAccessToken("divu"))}>click</button> */}
