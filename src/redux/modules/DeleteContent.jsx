import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __DeleteContent = createAsyncThunk(
  "deletecontent/deleteContent",
  async (payload, api) => {
    try {
      console.log(typeof payload)
      const data = await axios.delete(
        process.env.REACT_APP_SURVER + `/api/comment/${payload}`,
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

const DeleteContentSlice = createSlice({
  name: "deletecontent",
  initialState,
  reducers: {},
  extraReducers: {
    [__DeleteContent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__DeleteContent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__DeleteContent.rejected]: (state, action) => {
    //   if (action.payload.response.data === "NONE_LOGIN") {
    //     localStorage.removeItem("token");
    //     alert("로그인이 필요합니다.");
    //     window.location.replace("/login");
    //   } //생략가능부분
    },
  },
});

export const {} = DeleteContentSlice.actions;
export default DeleteContentSlice.reducer;