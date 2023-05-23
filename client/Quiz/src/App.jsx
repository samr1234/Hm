import React from "react";
import Register from "./Components/Register";
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Login from "./Components/Login";
const App = () => {
  return (
    

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/register" element={<Register />} />

        </Route>
      </Routes>


  );
};

export default App;
