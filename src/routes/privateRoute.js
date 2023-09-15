import { useUser } from "../context/userContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useUser();
  return user ? <>{children}</> : <Navigate to="/login" replace />;
};

export default PrivateRoute;
