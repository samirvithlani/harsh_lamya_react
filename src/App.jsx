import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {Header} from "./components/Header"
import  Footer  from "./components/Footer";
import { MapDemo } from "./components/MapDemo";
import { UseStateDemo1 } from "./components/UseStateDemo1";
import { UseStateDemo2 } from "./components/UseStateDemo2";
import { UseStateDemo3 } from "./components/UseStateDemo3";
import { Route, Routes } from "react-router-dom";
import { IPL } from "./components/IPL/IPL";
import { Navbar } from "./components/Navbar";
import { Teams } from "./components/IPL/Teams";
import { TeamDetail } from "./components/IPL/TeamDetail";
import { Error404 } from "./components/Error404";
import { Schedual } from "./components/IPL/Schedual";
import { FormDemo1 } from "./components/form/FormDemo1";
import { FormDemo2 } from "./components/form/FormDemo2";
import { FormDemo3 } from "./components/form/FormDemo3";

function App() {

  var appName = "IPL"

  return (
    <div>
      <Navbar appName = {appName}></Navbar>

      <Routes>
        <Route path="/" element ={<IPL/>}></Route>
        <Route path="/mapdemo" element = {<MapDemo/>}></Route>
        <Route path="/ipl" element ={<IPL/>}></Route>
        <Route path="/teams" element = {<Teams/>}></Route>
        {/* <Route path="/teamdetail/:id" element ={<TeamDetail/>}></Route> */}
        <Route path="/teams/teamdetail/:id" element ={<TeamDetail/>}></Route>
        <Route path="/schedual" element = {<Schedual/>}></Route>
        <Route path="/*" element={<Error404/>}></Route>
        <Route path ="/formdemo1" element = {<FormDemo3/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
