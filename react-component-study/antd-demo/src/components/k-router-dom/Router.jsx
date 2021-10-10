import React, { useEffect, useState } from "react";
import { RouterContext } from "./RouterContext";

export default function Router(props) {
  const { children, history } = props;
  const [state, setState] = useState(() => createContext(history));
  useEffect(() => {
    return history.listen(() => {
      setState(createContext(history));
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RouterContext.Provider value={state}>{children}</RouterContext.Provider>
  );
}

function computeRootMatch(pathname) {
  return { path: "/", url: "/", params: {}, isExact: pathname === "/" };
}

function createContext(history) {
  return {
    history,
    location: history.location,
    match: computeRootMatch(history.location.pathname),
  };
}
