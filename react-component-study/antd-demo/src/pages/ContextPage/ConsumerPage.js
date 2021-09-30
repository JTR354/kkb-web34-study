import React from "react";
import { ThemeContext, UserContext } from "./context";

export default class ConsumerPage extends React.PureComponent {
  render() {
    console.log("render", "consumer-page");
    return (
      <div>
        <ThemeContext.Consumer>
          {({ color }) => {
            console.log("render ThemeContext.Consumer");
            return <p style={{ color }}>Consumer</p>;
          }}
        </ThemeContext.Consumer>
        <UserContext.Consumer>
          {(user) => {
            console.log("render UserContext.Consumer");
            return <p>{user.name}</p>;
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}
