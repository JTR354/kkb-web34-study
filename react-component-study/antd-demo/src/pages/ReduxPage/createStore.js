export default function createStore(reducer, enhancer) {
  if (enhancer) {
    return enhancer(createStore)(reducer);
  }
  const map = new Map();
  let store;
  function subscribe(cb) {
    cb && map.set(cb, cb);
  }
  function unsubscribe(cb) {
    if (cb) {
      map.delete(cb);
    } else {
      map.clear();
    }
    console.log({ map });
  }
  function dispatch(action) {
    store = reducer(store, action);
    map.forEach((cb) => cb());
  }
  function getState() {
    return store;
  }
  dispatch({ type: undefined });
  return { subscribe, unsubscribe, dispatch, getState };
}
