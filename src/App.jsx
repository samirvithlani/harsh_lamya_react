import { useEffect, useState } from "react";
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
import { Login } from "./components/Login";
import ProtectedRoutes from "./hooks/ProtectedRoutes";
import { ApiDemo3 } from "./components/api/ApiDemo3";
import { Products } from "./components/Products";
import { ThemeContext } from "./ThemeContext";
import { ProductComp } from "./components/ProductComp";
import { BankComponent } from "./components/BankComponent";
import { io } from "socket.io-client";
import axios from "axios";
import { MuiButton } from "./mui/MuiButton";

function App() {

  const socket = io("http://localhost:3000")
  //axios.defaults.baseURL = "https://node5.onrender.com";

  var appName = "IPL";
  const [theme, settheme] = useState("light");
  const [message, setmessage] = useState("")

  const sendMessgeHandler = ()=>{

    socket.emit("sendMessage",message)
  }


  useEffect(()=>{
    socket.on("receiveMessage",(data)=>{
      console.log(data)
    })
  },[])

  return (
    <div>
      <input type="text" placeholder="Enter Message"  onChange={(event)=>{setmessage(event.target.value)}}/>
      <button onClick={()=>{sendMessgeHandler()}}>SEND...</button>
      <ThemeContext.Provider value={{ theme, settheme }}>
        <div
        
          style={{
            backgroundColor: theme == "dark" ? "black" : "white",
            color: theme == "dark" ? "white" : "black",
          }}
        >
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
            <Route element={<ProtectedRoutes />}>
              <Route path="/" element={<IPL />}></Route>
              <Route path="/mapdemo" element={<MapDemo />}></Route>
              <Route path="/ipl" element={<IPL />}></Route>
              <Route path="/teams" element={<Teams />}></Route>
              {/* <Route path="/teamdetail/:id" element ={<TeamDetail/>}></Route> */}
              <Route
                path="/teams/teamdetail/:id"
                element={<TeamDetail />}
              ></Route>
              <Route path="/schedual" element={<Schedual />}></Route>
              <Route path="/*" element={<Error404 />}></Route>
              <Route path="/formdemo1" element={<FormDemo3 />}></Route>
              <Route path="/formdemo4" element={<FormDemo4 />}></Route>
              <Route path="/formdemo5" element={<FormDemo5 />}></Route>
              <Route path="/useMemo" element={<UseMemoDemo1 />}></Route>
              <Route path="/useMemo3" element={<UseMemo3 />}></Route>
              <Route
                path="/useeffectdemo1"
                element={<UseEffectDemo1 />}
              ></Route>
              <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
              <Route path="/apidemo2" element={<ApiDemo3 />}></Route>
              <Route path="/adduser" element={<AddUser />}></Route>
              <Route path="/adduserform" element={<AddUserForm />}></Route>
              <Route path="/updateuser/:id" element={<UpdateUser />}></Route>
            </Route>
            <Route path="/products" element={<ProductComp />}></Route>
            <Route path="/bankcomp" element = {<BankComponent/>}></Route>
            <Route path="/muibutton" element = {<MuiButton/>}></Route>

            <Route path="/login" element={<Login />}></Route>
          </Routes>
        </div>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
