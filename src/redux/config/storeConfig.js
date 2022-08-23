import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/PostLogin";
import signup from "../modules/PostSignup"
import getmylist from "../modules/GetMypage"

const store = configureStore({
  reducer: { login, signup, getmylist },
});

export default store;

