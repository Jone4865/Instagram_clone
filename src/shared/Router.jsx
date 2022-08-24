import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

import Detail from "../pages/Detail";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Mypage from "../pages/Mypage/Mypage";
import DetailEdit from "../pages/DetailEdit";
import MypageEdit from "../pages/MypageEdit";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:postId" element={<Detail />} />
      <Route path="/detail/:postId/edit" element={<DetailEdit />} />
      <Route path="/mypage/:userId/edit" element={<MypageEdit />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/:nickname" element={<Mypage />} />
    </Routes>
  );
};

export default Router;