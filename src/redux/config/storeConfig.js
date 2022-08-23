import { configureStore } from "@reduxjs/toolkit";
import login from "../modules/PostLogin";
import signup from "../modules/PostSignup"
import getmylist from "../modules/GetMypage"
import postcontent from "../modules/PostContent"
import deletecontent from "../modules/DeleteContent"
import putcontent from "../modules/PutContent"

const store = configureStore({
  reducer: { login, signup, getmylist, postcontent, deletecontent, putcontent },
});

export default store;

