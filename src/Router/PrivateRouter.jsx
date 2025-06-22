import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);

  //   it will check location.
  const location = useLocation();
  //   console.log(location.pathname);

  if (loading) {
    return <div className="loading loading-xl"></div>;
  }

  if (!user) {
    return <Navigate to="/signIn" state={location.pathname}></Navigate>;
  }
  return children;
};

export default PrivateRouter;
