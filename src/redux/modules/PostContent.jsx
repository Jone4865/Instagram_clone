import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __PostContent = createAsyncThunk(
  "postcontent/postContent",
  async (payload, api) => {
    try {
      const data = await axios.post(
        process.env.REACT_APP_SURVER + "/api/post/create", payload,
        {
          headers: {
            authorization: process.env.REACT_APP_TOKENNAME + `${token}`,
          },
        }
      );
      
      return api.fulfillWithValue(data.data);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const postContentSlice = createSlice({
  name: "postcontent",
  initialState,
  reducers: {},
  extraReducers: {
    [__PostContent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PostContent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__PostContent.rejected]: (state, action) => {
    //   if (action.payload.response.data === "NONE_LOGIN") {
    //     localStorage.removeItem("token");
    //     alert("로그인이 필요합니다.");
    //     window.location.replace("/login");
    //   } //생략가능부분
    },
  },
});

export const {} = postContentSlice.actions;
export default postContentSlice.reducer;