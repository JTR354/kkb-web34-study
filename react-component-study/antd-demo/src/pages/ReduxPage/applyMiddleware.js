export default function applyMiddleware(...middlerWare) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    const chain = middlerWare.map((middleWare) => middleWare(midApi));
    // console.log(chain.toString());
    dispatch = compose(...chain)(dispatch);
    console.info(dispatch);
    return { ...store, dispatch };
  };
}

function compose(...fns) {
  if (fns.length === 0) return (args) => args;
  if (fns.length === 1) return fns[0];
  return fns.reduce(
    (a, b) =>
      function (...args) {
        // console.log(111, b(...args));
        return a(b(...args));
      }
  );
}

function f1(args) {
  console.log(f1.name, args);
  return args;
}

function f2(args) {
  console.log(f2.name, args);
  return args;
}

function f3(args) {
  console.log(f3.name, args);
  return args;
}

console.log(compose(f1, f2, f3));
