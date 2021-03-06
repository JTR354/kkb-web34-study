import { useContext } from "react";
import { RouterContext } from "./RouterContext";

export function useParams() {
  const match = useRouteMatch();
  return match?.params || {};
}
export function useHistory() {
  return useContext(RouterContext).history;
}
export function useLocation() {
  return useContext(RouterContext).location;
}
export function useRouteMatch() {
  return useContext(RouterContext).match;
}
