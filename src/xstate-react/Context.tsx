import React, { createContext, useState, useEffect, useContext } from "react";
import { interpret } from "xstate/lib/interpreter";
import stateWrapper from "./State";

interface Value {
  transition(event: string): void;
  state: any;
  exState: any,
  setExState(value: any): void
}

export default ({ name, machine }) => {
  const Context = createContext(name);

  let transition = (event: string) => {};

  const Provider = props => {
    const [state, setState] = useState(machine.initialState);
    const [exState, setExState] = useState({})

    useEffect(() => {
      const xsf = interpret(machine)
        .onTransition(setState)
        .onChange(setExState)

      xsf.start();

      transition = (event: string) => xsf.send(event);
      return () => xsf.stop();
    }, []);

    const value: Value = { transition, state: state.value, exState, setExState };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  const Consumer = Context.Consumer;

  const useMachineContext = () => {
    const { state } = useContext(Context);
    return {
      state,
      transition
    };
  };

  return {
    Provider,
    Consumer,
    State: stateWrapper(useMachineContext),
    useMachineContext
  };
};
