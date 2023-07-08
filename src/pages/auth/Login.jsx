import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAccessToken } from "redux/reducers/authReducer";

function Login() {
  const dispatch = useDispatch();
  const aaa = useSelector((s) => s?.authReducer?.accessToken);
  console.log(aaa);
  return (
    <div>
      <button onClick={() => dispatch(updateAccessToken("divu"))}>click</button>
    </div>
  );
}

export default Login;
