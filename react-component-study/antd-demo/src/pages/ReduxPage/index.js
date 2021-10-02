import React, { useEffect, useState } from "react";
import { createStore, applyMiddleware } from "./kredux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import logger from "redux-logger";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case "ADD":
      return state + action.payload || 1;
    default:
      return state;
  }
}

function logger({ getState }) {
  return (next) => (action2) => {
    console.log(logger.name, next);
    console.log("-".repeat(20), "prev", getState());
    console.log("action:", action2);
    next(action2); // 异步代码？？？同步代码？？？
    console.log("-".repeat(20), "end", getState());
    // return val;
  };
}
// next 把下一步的控制权交给 对应的函数
function thunk({ getState, dispatch }) {
  return (next) => async (action3) => {
    console.log(thunk.name, next);
    console.log(thunk.name, action3);
    if (typeof action3 === "function") {
      // console.log(action3(dispatch, getState));
      action3(dispatch, getState);
    } else {
      next(action3);
    }
  };
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
