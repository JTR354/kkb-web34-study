export default function applyMiddleware(...middlerWare) {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action) => dispatch(action),
    };
    const chain = middlerWare.map((middleWare) => middleWare(midApi));
    dispatch = compose(...chain)(dispatch);
    return { ...store, dispatch };
  };
}

function compose(...fns) {
  if (fns.length === 0) return (args) => args;
  if (fns.length === 1) return fns[0];
  return fns.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}
