import globToRegExp from "glob-to-regexp";
import { isPlainObject } from "lodash";

function recursiveObjectValuesToArray(obj) {
  let result = [];
  //  @ts-ignore
  Object.values(obj).forEach((value: any) => {
    if (isPlainObject(value)) {
      result = result.concat(recursiveObjectValuesToArray(value));
    } else {
      result = result.concat(value);
    }
  });
  return result;
}

const matches = (value, machineState) => {
  const values = Array.isArray(value) ? value : [value];
  const states = recursiveObjectValuesToArray(machineState);
  return values.some(val => {
    const matcher = globToRegExp(val);
    return states.some(state => matcher.test(state));
  });
};

const stateWrapper = useMachineContext => {
  interface Props {
    value: any;
    children: any;
  }

  const State = (props: Props) => {
    const { state } = useMachineContext();
    const match = matches(props.value, state);
    return match ? props.children : null;
  };
  return State;
};

export default stateWrapper;
