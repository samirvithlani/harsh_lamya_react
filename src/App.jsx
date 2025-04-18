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

function App() {

  var userName ="ram"
  var userAge = 24
  var isActive= true
  var user={
    id:1,
    name:"amit"
  }

  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element ={<IPL/>}></Route>
        <Route path="/mapdemo" element = {<MapDemo/>}></Route>
        <Route path="/ipl" element ={<IPL/>}></Route>
        <Route path="/teams" element = {<Teams/>}></Route>
        {/* <Route path="/teamdetail/:id" element ={<TeamDetail/>}></Route> */}
        <Route path="/teams/teamdetail/:id" element ={<TeamDetail/>}></Route>
        <Route path="/*" element={<Error404/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
