import routeNames from "constants/routeNames";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Profile from "pages/main/Profile";
import { Route, Routes } from "react-router-dom";

function App() {
  const { LOGIN, PROFILE, REGISTER } = routeNames;
  const token = "";
  return (
    <Routes>
      {!token ? (
        <Route>
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
