import { useEffect, useReducer, Component, useState } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Switch,
//   Link,
//   useParams,
//   useHistory,
//   useLocation,
//   useRouteMatch,
//   Redirect,
//   Prompt,
//   withRouter,
// } from "react-router-dom";
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
  withRouter,
  Redirect,
  Prompt,
} from "../../components/k-router-dom";
import PrivateRoute from "./PrivateRoute";
class Production extends Component {
  constructor(props) {
    super(props);
    this.state = { confirm: true };
  }
  render() {
    const { match } = this.props;
    const { url } = match;
    const { id } = match.params;

    return (
      <div>
        Product:{id}
        <Link to={url + "/detail"}>详情</Link>
        <Route path={url + "/detail"} component={Detail} />
        <Prompt
          when={this.state.confirm}
          // message="Are you sure you want to leave?"
          message={(location) => {
            // return <div>123</div>;
            return "Are you sure you want to leave-fun";
          }}
        />
      </div>
    );
  }
}

function Detail(props) {
  console.log("detail", props); //sy-log
  return (
    <div>
      <h1>detail</h1>
    </div>
  );
}

const Product = withRouter(Production);
export default function RouterPage() {
  const [count, update] = useReducer((x) => x + 1, 0);
  // const ComHomePage = useCallback(
  //   () => <Page title="Component HomePage" count={count} />,
  //   []
  // );
  // function ComHomePage() {
  //   return <Page title="Component HomePage" count={count} />;
  // }
  // console.log(RouterPage.name, "render==>");
  return (
    <>
      <h1>router page{count}</h1>
      <button onClick={update}>add</button>
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
            <Link to="/product/123">Product</Link>
          </li>
          <li>
            <Link to="/xxx">404</Link>
          </li>
        </ul>
        <Switch>
          <Route
            exact
            path="/"
            // component={() => <Page title="Component HomePage" count={count} />}
            render={() => <Page title="Render HomePage" />}
            children={() => <Page title="Children HomePage" count={count} />}
          >
            <Page title="HomePage" count={count} />
          </Route>
          <PrivateRoute
            path="/user"
            component={(props) => (
              <Page {...props} title="UserPage" count={count} />
            )}
          />
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/product/:id">
            <Product />
          </Route>
          <Route>
            <Page title="404" />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

function Page(props) {
  const params = useParams();
  const history = useHistory();
  const location = useLocation();
  const match = useRouteMatch();
  useEffect(() => {
    // console.log(props.title, "did mounted");
    console.log({ params, history, location, match });
    return () => {
      // console.log(props.title, "did unmounted");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(props.title, "render");
  return (
    <>
      <h2>
        {props.title} Page{props.count}
      </h2>
      <h3>detail-{params.id}</h3>
    </>
  );
}

function Login(props) {
  const [name, setName] = useState("");
  return (
    <>
      <h1>Login</h1>
      <label>
        <span>username</span>
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button
        onClick={() => {
          console.log(name);
        }}
      >
        login
      </button>
    </>
  );
}
