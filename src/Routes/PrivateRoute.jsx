import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-slate-950">
        <span className="loading loading-spinner loading-lg text-cyan-400"></span>
      </div>
    );
  }

  if (user && user.emailVerified) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login" replace />;
};

export default PrivateRoute;