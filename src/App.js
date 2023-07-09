import routeNames from "src/constants/routeNames";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Auth from "./pages/auth/Auth";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Profile from "./pages/main/Profile";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const { LOGIN, PROFILE, REGISTER } = routeNames;
  const token = useSelector((state) => state?.authReducer?.accessToken);

  useEffect(() => {
    if (token && ["/", LOGIN, REGISTER]?.includes(location?.pathname)) {
      navigate(PROFILE);
    } else if (!token && ["/", PROFILE]?.includes(location?.pathname)) {
      navigate(LOGIN);
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
        <Route>
          <Route path={PROFILE} element={<Profile />} />
        </Route>
      )}
      <Route />
    </Routes>
  );
}

export default App;
