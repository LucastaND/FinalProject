import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!state.isAuthenticated) {
          return <Navigate to="/login" />;
        }

        // Kiểm tra xem người dùng có quyền truy cập hay không
        if (roles && !roles.includes(state.user.role)) {
          return <Navigate to="/" />;
        }

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
