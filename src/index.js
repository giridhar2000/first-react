import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function One() {
  return (
    <div>
      <h1>this is the one function</h1>
      <App />
    </div>
  );
}

ReactDOM.render(<One />, document.getElementById("root"));
