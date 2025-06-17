import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Header } from "./components/Header";
import Footer from "./components/Footer";
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
import { FormDemo4 } from "./components/form/FormDemo4";
import { FormDemo5 } from "./components/form/FormDemo5";
import { UseMemoDemo1 } from "./components/UseMemoDemo1";
import { UseMemo2 } from "./components/UseMemo2";
import { UseMemo3 } from "./components/UseMemo3";
import { ApiDemo1 } from "./components/api/ApiDemo1";
import { UseEffectDemo1 } from "./components/UseEffectDemo1";
import { ApiDemo2 } from "./components/api/ApiDemo2";
import { Slide, ToastContainer } from "react-toastify";
import { AddUser } from "./components/api/AddUser";
import { AddUserForm } from "./components/api/AddUserForm";
import { UpdateUser } from "./components/api/UpdateUser";

function App() {
  var appName = "IPL";

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Navbar appName={appName}></Navbar>

      <Routes>
        <Route path="/" element={<IPL />}></Route>
        <Route path="/mapdemo" element={<MapDemo />}></Route>
        <Route path="/ipl" element={<IPL />}></Route>
        <Route path="/teams" element={<Teams />}></Route>
        {/* <Route path="/teamdetail/:id" element ={<TeamDetail/>}></Route> */}
        <Route path="/teams/teamdetail/:id" element={<TeamDetail />}></Route>
        <Route path="/schedual" element={<Schedual />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
        <Route path="/formdemo1" element={<FormDemo3 />}></Route>
        <Route path="/formdemo4" element={<FormDemo4 />}></Route>
        <Route path="/formdemo5" element={<FormDemo5 />}></Route>
        <Route path="/useMemo" element={<UseMemoDemo1 />}></Route>
        <Route path="/useMemo3" element={<UseMemo3 />}></Route>
        <Route path="/useeffectdemo1" element={<UseEffectDemo1 />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/adduser" element = {<AddUser/>}></Route>
        <Route path="/adduserform" element = {<AddUserForm/>}></Route>
        <Route path="/updateuser/:id" element = {<UpdateUser/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
