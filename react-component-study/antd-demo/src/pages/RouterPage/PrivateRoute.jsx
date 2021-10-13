import React from "react";
import { Route, Redirect } from "../../components/k-router-dom";

export default function PrivateRoute(props) {
  const { isLogin = true, component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(childProps) =>
        isLogin ? <Component {...childProps} /> : <Redirect to="/login" />
      }
    />
  );
}
