import React from "react";
import { Route, Routes } from "react-router-dom"
import "./App.css";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Signup from './Pages/Signup';
import Login from "./Pages/Login";
import Profile from "./Pages/Profile";

function App() {
  return (
    <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/profile" element={<Profile />} /> 
          <Route path="/register" element={<Register />} /> 
        </Routes>
    </div>
  );
}

export default App;
