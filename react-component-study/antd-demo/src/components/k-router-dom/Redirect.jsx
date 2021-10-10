import { useContext, useEffect } from "react";
import { RouterContext } from "./RouterContext";

export default function Redirect(props) {
  const context = useContext(RouterContext);
  useEffect(() => {
    context.history.push(props.to);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
