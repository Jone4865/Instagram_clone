import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
    </Routes>
  );
};

export default Router;

