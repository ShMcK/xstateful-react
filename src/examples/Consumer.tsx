import React from "react";

import Demo from "./Demo";
import StateContext from "./StateContext";

const Consumer = () => (
  <StateContext.Consumer>
    {({ state, transition }) => (
      <Demo title='Context Consumer' state={state} transition={transition} />
    )}
  </StateContext.Consumer>
);

export default Consumer;
