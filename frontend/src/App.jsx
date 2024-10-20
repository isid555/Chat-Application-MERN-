import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Home from "./pages/home/Home.jsx";
import {Route, Routes} from "react-router-dom";
import {Toaster} from "react-hot-toast";

function App() {
  return(
      <div className={"p-4 h-screen  flex items-center justify-center"}>
       <Routes>
          <Route path={"/"} element={<Home/>}/>
           <Route path={"/login"} element={<Login/>}/>
           <Route path={"/signup"} element={<Signup/>}/>

       </Routes>
          <Toaster/>
      </div>
  )
}

export default App
