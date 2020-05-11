// import * as React from "react";
// import * as ReactDOM from "react-dom";

// import { Hello } from "./components/Hello";

// ReactDOM.render(
//   <Hello compiler="TypeScript" framework="React" />,
//   document.getElementById("root")
// );


import { hot } from "react-hot-loader/root";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";


const render = (Component:any) =>
  ReactDOM.render(<Component />, document.getElementById("root"));

render(hot(App));
