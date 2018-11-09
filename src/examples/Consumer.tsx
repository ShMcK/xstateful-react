import React from "react";

import Demo from "./Demo";
import StateContext from "./StateContext";

const Consumer = () => (
  <StateContext.Consumer>
    {({ state, transition }) => {
      return <Demo title='Context Consumer' state={state} transition={transition} />;
    }}
  </StateContext.Consumer>
);

export default Consumer;
