import React, { Component } from "react";
import "./App.css";

import StateContext from './examples/StateContext'
import ConsumerExample from "./examples/Consumer";
import UseMachineContextExample from './examples/UseMachineContext'
import WithWrapperExample from './examples/WithWrapper'

class App extends Component {
  render() {
    return (
      <div className="App">
        <StateContext.Provider>
          <ConsumerExample />
          <UseMachineContextExample />
          <WithWrapperExample />
        </StateContext.Provider>
      </div>
    );
  }
}

export default App;
