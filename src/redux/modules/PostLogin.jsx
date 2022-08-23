import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};


export const __PostLogin = createAsyncThunk(
  "login/Login",
  async (payload, api) => {
    console.log(process.env.REACT_APP_SURVER)
    try {
      const data = await axios.post(process.env.REACT_APP_SURVER + "/api/auth/signin", payload, {
      }).then((res) => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          alert("로그인완료");
          window.location.replace("/");
        } else alert("아이디가 존재하지 않습니다.");
      })
    } catch (e) {
    //   if (e.response.data === "BAD_REQUEST") {
    //     alert("입력값을 확인해주세요.");
    //   }
      return api.rejectWithValue(e);
    }
  }
);

const postloginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [__PostLogin.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PostLogin.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__PostLogin.rejected]: (state, action) => {
      console.log(action); //생략가능부분
    },
  },
});

export const {} = postloginSlice.actions;
export default postloginSlice.reducer;