import { Route, Routes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Settings from "../pages/Settings";
import Write from "../pages/Write";
import Single from "../pages/Single";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./privateRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/settings"
          element={
            <PrivateRoute>
              <Settings />
            </PrivateRoute>
          }
        />
        <Route
          path="/write"
          element={
            <PrivateRoute>
              <Write />
            </PrivateRoute>
          }
        />
        <Route path="/post/:postId" element={<Single />} />
      </Route>
      {/* Catch all undefined routes */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
