import React, { useState } from "react";
import { ThemeContext, UserContext } from "./context";
import ClassTypePage from "./ClassTypePage";
import UseContextPage from "./UseContextPage";
import ConsumerPage from "./ConsumerPage";
import "./style.css";

// export default function ContextPage() {
//   const [theme, setTheme] = useState({ color: "red" });
//   const [user, setUser] = useState({ name: "Leo" });
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1
//         onClick={() => {
//           setCount((c) => c + 1);
//         }}
//       >
//         Context Page {count}
//       </h1>
//       <ThemeContext.Provider value={theme}>
//         <UserContext.Provider value={user}>
//           <ClassTypePage />
//           <UseContextPage />
//           <ConsumerPage />
//         </UserContext.Provider>
//       </ThemeContext.Provider>
//     </>
//   );
// }

export default class ContextPageClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: { name: "Leo", setState: this.setState },
      theme: { color: "red", setState: this.setState },
    };
  }
  render() {
    return (
      <>
        <h1
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Context Page {this.state.count}
        </h1>
        <button
          onClick={() => {
            this.setState({
              theme: {
                color: this.state.theme.color === "red" ? "green" : "red",
              },
            });
          }}
        >
          theme
        </button>
        <ThemeContext.Provider value={this.state.theme}>
          <UserContext.Provider value={this.state.user}>
            <ClassTypePage />
            <UseContextPage />
            <ConsumerPage />
          </UserContext.Provider>
        </ThemeContext.Provider>
        <div className="box"></div>
      </>
    );
  }
}
