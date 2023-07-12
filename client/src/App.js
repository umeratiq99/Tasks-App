import './App.css';
import { Fragment, useState } from "react";
import { Routes , Route } from 'react-router-dom';
import Front from './components/LandingPage';
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from './components/Register';
import NotFound from './components/NotFoundPage';
// import InputTask from "./components/Inputtask";
// import List from "./components/Listtodo";
// import React, { createContext } from 'react';
function App() {
  // const [count,setCount]=useState(true);
  return (
    <Fragment>
        <Navbar/>
        {/* <Front/> */}
      <div className="container">
          {/* <Route path="/" element={<Home />}/> */}
          {/* <Route path="/create" element={<Creat/>}/> */}
        <Routes>
          <Route path="/" element={<Front/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
       {/* <MyContext.Provider value={{count,setCount}}> */}
        {/* <Login/> */}
        {/* <InputTask /> */}
        {/* <List />  */}
        {/* </MyContext.Provider> */}
      </div>
    </Fragment>

  )
}

export default App;