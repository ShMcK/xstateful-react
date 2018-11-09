import reactXState from "../xstate-react";

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
        NEXT: {
            target: 'green',
            actions: ['sayHi']
        }
      }
    }
  }
};

const StateContext = reactXState({
  name: "Test",
  config
});

export default StateContext;
