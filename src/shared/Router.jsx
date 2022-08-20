import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Login from "../components/Login";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;

