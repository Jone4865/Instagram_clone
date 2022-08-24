import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __PutContent = createAsyncThunk(
  "putcontent/putContent",
  async (payload, api) => {
    const commentId = +payload.commentId
    try {
      const data = await axios.put(
        process.env.REACT_APP_SURVER + `/api/comment/${commentId}`, {comment: payload.newcomment} ,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return api.fulfillWithValue(data.data);
    } catch (e) {
      return api.rejectWithValue(e);
    }
  }
);

const PutContentSlice = createSlice({
  name: "putcontent",
  initialState,
  reducers: {},
  extraReducers: {
    [__PutContent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__PutContent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__PutContent.rejected]: (state, action) => {
    //   if (action.payload.response.data === "NONE_LOGIN") {
    //     localStorage.removeItem("token");
    //     alert("로그인이 필요합니다.");
    //     window.location.replace("/login");
    //   } //생략가능부분
    },
  },
});

export const {} = PutContentSlice.actions;
export default PutContentSlice.reducer;