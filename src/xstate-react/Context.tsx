import React, { createContext, useState, useEffect, useContext } from "react";
import { interpret } from "xstate/lib/interpreter";
import stateWrapper from "./State";
import { Machine } from "xstate/lib/types";

interface Value {
  transition(event: string): void;
  state: any;
  exState: any,
  setExState(value: any): void
}

interface MachineContextProps {
  actions?: {
    [key: string]: () => void
  }
}

interface Action {
  type: string,
  exec?: () => void
}

export default ({ name, machine }) => {
  const Context = createContext(name);

  let transition = (event: string) => {};
  let xsf
  let actions: Action[] = []

  const Provider = props => {

    const [state, setState] = useState(machine.initialState);
    const [exState, setExState] = useState({})

    useEffect(() => {
      xsf = interpret(machine)
        .onTransition(setState)
        .onChange(setExState)

      xsf.start();

      transition = (event: string) => {
        const next = xsf.send(event)
        actions = next.actions || []

        actions.forEach((action: Action) => {
          action.exec && action.exec();
        });

      };
      return () => xsf.stop();
    }, []);

    const value: Value = { transition, state: state.value, exState, setExState };

    return <Context.Provider value={value}>{props.children}</Context.Provider>;
  };

  const Consumer = Context.Consumer;

  const useMachineContext = (props: MachineContextProps = { actions: {} }) => {
    const { state } = useContext(Context);

    // if a context action is available & triggered, run it
    actions.forEach(({ type }: Action) => {
      if (props.actions && props.actions[type]) {
        props.actions[type]();
      }
    });

    return { state, transition };
  };

  return {
    Provider,
    Consumer,
    State: stateWrapper(useMachineContext),
    useMachineContext
  };
};
