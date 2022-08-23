import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

import Detail from "../pages/Detail";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Mypage from "../pages/Mypage/Mypage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:postId" element={<Detail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/:nickname" element={<Mypage />} />
    </Routes>
  );
};

export default Router;

