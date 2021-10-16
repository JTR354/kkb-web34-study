import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/_404Page";

import PrivateRoute from "./PrivateRoute";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/xxx">404</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <PrivateRoute path="/user" component={UserPage} />
          <Route path="/login" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
