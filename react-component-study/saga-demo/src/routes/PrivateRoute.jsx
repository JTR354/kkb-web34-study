import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
export default connect((state) => state.user)(function PrivateRoute({
  isLogin,
  component: Component,
  ...rest
}) {
  console.log({ rest }, isLogin);
  return (
    <Route
      {...rest}
      render={(props) => {
        return isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: rest.location.pathname } }}
          />
        );
      }}
    />
  );
});
