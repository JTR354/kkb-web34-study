import { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
export default connect(
  (state) => {
    return state.user;
  },
  (dispatch) => {
    return { dispatch };
  }
)(function LoginPage({ isLogin, loading, location, dispatch, history }) {
  const from = location.state?.from || "/";
  const [name, setName] = useState("");
  if (isLogin) {
    return <Redirect to={from} />;
  }
  return (
    <>
      <h1>login page</h1>
      <label>
        <span>name</span>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          dispatch({ type: "LOGIN_SUCCESS", payload: { name } });
          history.push(from);
        }}
      >
        {loading ? "login..." : "login"}
      </button>
    </>
  );
});
