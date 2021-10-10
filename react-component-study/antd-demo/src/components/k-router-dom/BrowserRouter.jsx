import { useRef } from "react"
import {createBrowserHistory} from "history";
import Router from "./Router";

export default function BrowserRouter (props) {
  const {children} = props
  const history = useRef(createBrowserHistory())
  
  return <Router history={history.current} children={children} />
}