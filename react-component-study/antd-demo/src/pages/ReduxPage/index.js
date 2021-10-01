import React, { useEffect, useState } from "react";
import { createStore, applyMiddleware } from "./kredux";
// import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload || 1;
    default:
      return state;
  }
}

const store = createStore(counterReducer, applyMiddleware(thunk, logger));

export default function ReduxPage() {
  const [, update] = useState(0);
  useEffect(() => {
    function listener() {
      update((u) => u + 1);
    }
    store.subscribe(listener);

    return () => {
      store.unsubscribe(listener);
    };
  }, []);
  return (
    <>
      <h1>{ReduxPage.name}</h1>
      <p>{store.getState()}</p>
      <button
        onClick={() => {
          store.dispatch({ type: "ADD", payload: 100 });
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          store.dispatch(api);
        }}
      >
        {" "}
        addAsync
      </button>
    </>
  );
}

async function api(dispatch) {
  await sleep();
  dispatch({ type: "ADD", payload: 1 });
}

function sleep() {
  return new Promise((resolve) => setTimeout(resolve, 1000));
}
