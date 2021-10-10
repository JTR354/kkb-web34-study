import { useCallback, useContext } from "react";
import { RouterContext } from "./RouterContext";

export default function Link(props) {
  const { history } = useContext(RouterContext);
  const { children, to } = props;
  const handler = useCallback(
    (e) => {
      e.preventDefault();
      history.push(to);
    },
    [history, to]
  );
  return (
    <a href={to} onClick={handler}>
      {children}
    </a>
  );
}
