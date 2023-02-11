import "./App.css";
import ClassCounterone from "./components/ClassCounterone";
import ClassMouse from "./components/ClassMouse";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import HookUsers from "./components/HookUsers";
import MouseContainer from "./components/MouseContainer";
import HookAxiosExample from "./components/HookAxiosExample";
import EmployeeData from "./components/EmployeeData";
import EmployeeSaveData from "./components/EmployeeSaveData";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import DataObjectChange from "./components/DataObjectChange";
import ComponentC from "./components/ComponentC";

import React, { useReducer } from "react";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentAD from "./components/ComponentAD";
import DataFetchingOne from "./components/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetchingTwo";
import ParentComponent from "./components/ParentComponent";
import Count from "./components/Count";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

export const UserContext = React.createContext();

export const ChannelContext = React.createContext();

const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export const CounterContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    // <CounterContext.Provider
    //   value={{ counterVal: count, counterDispath: dispatch }}
    // >
      <div className="App">
        {/* {count} */}
        {/* <ClassCounter/> */}
        {/* <HookCounter/> */}
        {/* <HookCounterTwo/> */}
        {/* <HookCounterThree/> */}
        {/* <HookCounterFour/> */}
        {/* <ClassCounterone/> */}
        {/* <HookCounterOne/> */}
        {/* <HookUsers/> */}
        {/* <ClassMouse/> */}
        {/* <HookMouse/> */}
        {/* <MouseContainer/> */}
        {/* <HookAxiosExample/> */}
        {/* <EmployeeData/> */}
        {/* <EmployeeSaveData/> */}
        {/* <IntervalClassCounter/>
      <IntervalHookCounter/> */}
        {/* <DataFetching/> */}
        {/* <DataObjectChange/> */}
        {/* <UserContext.Provider value={"vijay"}>
        <ChannelContext.Provider value={'vijay test'}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <CounterOne/> */}
        {/* <CounterTwo/> */}
        {/* <CounterThree/> */}
        {/* <ComponentA />
        <ComponentAD /> */}
        {/* <DataFetchingOne/> */}
        {/* <DataFetchingTwo/> */}
        {/* <ParentComponent/> */}
        {/* <Count/> */}
        {/* <FocusInput/> */}
        <ClassTimer/>
        <HookTimer/>
      </div>
    // </CounterContext.Provider>
  );
}

export default App;
