import reactXState from "./xstate-react";

const config = {
  key: "light",
  initial: "green",
  states: {
    green: {
      on: {
        NEXT: "yellow"
      }
    },
    yellow: {
      on: {
        NEXT: "red"
      }
    },
    red: {
      on: {
        NEXT: "green"
      }
    }
  }
};

const StateContext = reactXState({
  name: "Test",
  config
});

export default StateContext;
