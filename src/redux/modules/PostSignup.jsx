import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};


export const __PostSignup = createAsyncThunk(
  "signup/Signup",
  async (payload, api) => {
    try {
      const data = await axios.post(process.env.REACT_APP_SURVER + "/api/auth/signup", payload)
      .then((res) => {
        if (res.success === true) {
          alert("회원가입이 완료되었습니다");
        } else {
          alert("이미 있는 계정입니다")
        }
      })
    } catch (e) {
      console.log(e)
      //   if (e.response.data === "BAD_REQUEST") {
      //     alert("입력값을 확인해주세요.");
      //   }
      return api.rejectWithValue(e);
    }
  }
);

const postsignupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers: {
    [__PostSignup.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PostSignup.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__PostSignup.rejected]: (state, action) => {
      console.log(action); //생략가능부분
    },
  },
});

export const { } = postsignupSlice.actions;
export default postsignupSlice.reducer;