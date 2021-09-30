import React, { useContext } from "react";
import { ThemeContext, UserContext } from "./context";

function UseContextPage() {
  const { color } = useContext(ThemeContext);
  const { name } = useContext(UserContext);
  console.log("render", UseContextPage.name);
  return <p style={{ color }}>UseContextPage {name}</p>;
}
export default React.memo(UseContextPage);
