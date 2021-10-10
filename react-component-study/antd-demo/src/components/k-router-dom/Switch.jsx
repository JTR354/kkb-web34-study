import React, { useContext } from "react";
import { RouterContext } from "./RouterContext";
import matchPath from "./matchPath";
export default function Switch(props) {
  const { children } = props;
  const context = useContext(RouterContext);
  let match;
  let element;
  React.Children.forEach(children, (child) => {
    if (match == null && React.isValidElement(child)) {
      match = child.props.path
        ? matchPath(context.location.pathname, child.props)
        : context.match;
      element = child;
    }
  });
  return match ? React.cloneElement(element, { computedMatch: match }) : null;
}
