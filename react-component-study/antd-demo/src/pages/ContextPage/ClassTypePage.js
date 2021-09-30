import React from "react";
import ChildPage from "./ChildPage";
import { ThemeContext } from "./context";

export default class ClassTypePage extends React.PureComponent {
  static contextType = ThemeContext;
  render() {
    console.log("render===> classTypePage");
    const { color } = this.context;
    return (
      <p style={{ color }}>
        ClassTypePage
        <ChildPage />
      </p>
    );
  }
}
