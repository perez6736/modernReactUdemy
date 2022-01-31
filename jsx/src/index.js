// import react and react dom
import React from "react";
import ReactDOM from "react-dom";

// create a react component
const App = () => {
  const buttonText = "Click me";

  return (
    <div>
      <label className="label" htmlFor="name">
        Name
        <input id="name" type="text" style={{ marginLeft: "1em" }}></input>
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText}
        </button>
      </label>
    </div>
  );
};

// take the react component and display it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));
