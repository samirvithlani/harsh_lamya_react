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

function App() {

  var userName ="ram"
  var userAge = 24
  var isActive= true
  var user={
    id:1,
    name:"amit"
  }

  return (
    <div className="main-content">
      <Header></Header>
      {/* <UseStateDemo1></UseStateDemo1> */}
      {/* <UseStateDemo2/> */}
      <UseStateDemo3></UseStateDemo3>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
