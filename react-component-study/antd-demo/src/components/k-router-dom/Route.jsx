import React, { useContext } from "react";
import matchPath from "./matchPath";
import { RouterContext } from "./RouterContext";

export default function Route(props) {
  const { path, children, component, render, computedMatch } = props;
  const context = useContext(RouterContext);
  const { location, match: contextMatch } = context;
  const match = computedMatch
    ? computedMatch
    : path
    ? matchPath(location.pathname, props)
    : contextMatch;
  // match children component render
  // no match function children
  const Props = {
    ...context,
    match,
  };
  return (
    <RouterContext.Provider value={Props}>
      {match
        ? children
          ? typeof children === "function"
            ? children(Props)
            : children
          : component
          ? React.createElement(component, Props)
          : render
          ? render(Props)
          : null
        : typeof children === "function"
        ? children(Props)
        : null}
    </RouterContext.Provider>
  );
}
