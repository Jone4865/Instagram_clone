import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";

import Detail from "../pages/Detail";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Mypage from "../pages/Mypage/Mypage";
import MypageEdit from "../pages/MypageEdit";
import DetailEdit from "../pages/DetailEdit";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/detail/:postId" element={<Detail />} />
      <Route path="/detail/:postId/edit" element={<DetailEdit />} />
      <Route path="/:nickname/edit" element={<MypageEdit />} />
    </Routes>
  );
};

export default Router;