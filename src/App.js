import routeNames from "src/constants/routeNames";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/main/Profile";
import UpdateProfile from "./pages/main/UpdateProfile";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { AUTH, LOGIN, PROFILE, REGISTER, UPDATE_PROFILE } = routeNames;
  const token = useSelector((state) => state?.authReducer?.accessToken);

  useEffect(() => {
    if (
      token &&
      ["/", `${AUTH}/${LOGIN}`, `${AUTH}/${REGISTER}`]?.includes(
        location?.pathname
      )
    ) {
      navigate(PROFILE);
    } else if (!token && ["/", PROFILE]?.includes(location?.pathname)) {
      navigate(`${AUTH}/${LOGIN}`);
    }
  }, [token]);

  return (
    <Routes>
      {!token ? (
        <Route path="/auth" element={<Auth />}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={REGISTER} element={<Register />} />
        </Route>
      ) : (
        <>
          <Route path={PROFILE} element={<Profile />} />
          <Route path={UPDATE_PROFILE} element={<UpdateProfile />} />
        </>
      )}
      <Route />
    </Routes>
  );
}

export default App;
