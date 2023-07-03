import React from "react";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components/Login";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    

    <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/auth/register" element={<Register />} />
          <Route path="/auth/login" element={<Register />} />
         
          
          
        </Route>
      </Routes>

    // <Register/>

  );
};

export default App;
