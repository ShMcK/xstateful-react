import React, { Component } from "react";
import "./App.css";
import StateContext from "./StateContext";

import ContextHook from "./ContextHook";

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateContext.Provider>
          <StateContext.Consumer>
            {({ state, transition }) => {
              return (
                <div style={{ width: 200 }}>
                  <span>ConsumerValue: {state}</span>
                  <button onClick={() => transition("NEXT")}>
                    Transition
                  </button>
                </div>
              );
            }}
          </StateContext.Consumer>
          <ContextHook />
        </StateContext.Provider>
      </div>
    );
  }
}

export default App;
