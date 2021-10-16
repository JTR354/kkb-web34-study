import { Component } from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "./lib0/k-react-dom";
import "./index.css";
import "./App.css";
// import App from "./App";
// import reportWebVitals from './reportWebVitals';
import logo from "./logo.svg";

function FunctionComponent(props) {
  return (
    <div>
      <p>{FunctionComponent.name}</p>
    </div>
  );
}

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Cc</h1>
      </div>
    );
  }
}

ReactDOM.render(
  // <React.StrictMode>
  <div>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit and save to reload.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    <FunctionComponent />
    <ClassComponent />
  </div>,
  // </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
