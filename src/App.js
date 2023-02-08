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

import React from "react";
import CounterOne from "./components/CounterOne";

export const UserContext = React.createContext();

export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
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
      <CounterOne/>
    </div>
  );
}

export default App;
