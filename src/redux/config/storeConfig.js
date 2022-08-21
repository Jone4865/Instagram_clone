import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/PostLogin";
import signup from "../modules/PostSignup"

const store = configureStore({
  reducer: { login, signup },
});

export default store;

