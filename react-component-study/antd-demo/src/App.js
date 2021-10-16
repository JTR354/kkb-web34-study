// import React from "react";
// // import { Button } from 'antd';
// import "./App.css";
// // import FormPage from "./pages/FormPage";
// // import ContextPage from "./pages/ContextPage";
// // import ReduxPage from "./pages/ReduxPage";
// import RouterPage from "./pages/RouterPage";
// const App = () => (
//   <div className="App">
//     {/* <FormPage /> */}
//     {/* <ContextPage /> */}
//     {/* <ReduxPage /> */}
//     <RouterPage />
//   </div>
// );

// export default App;

import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

const textState = atom({
  key: "textState", // unique ID (with respect to other atoms/selectors)
  default: { text: "", msg: "" }, // default value (aka initial value)
});

const charCountState = selector({
  key: "charCountState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    // const text = get(textState);

    return get(textState).msg;
  },
});

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
      <Test />
    </div>
  );
}

function Test() {
  console.log(Test.name, "render");
  return <>Test</>;
}

function CharacterCount() {
  console.log(CharacterCount.name, "render");
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

function TextInput() {
  // console.log(TextInput.name, "render");
  const [{ text }, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText((state) => ({ ...state, text: event.target.value }));
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}

export default App;
