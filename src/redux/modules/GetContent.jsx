import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  isLoading: false, //
  error: null, //
};

const token = localStorage.getItem("token");

export const __getMycontent = createAsyncThunk(
  "getmylist/getMylist",
  async (payload, api) => {
    console.log(process.env.REACT_APP_TOKENNAME)
    try {
      const data = await axios.get(
        process.env.REACT_APP_SURVER + "/api/auth/feed",
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

const getMycontentSlice = createSlice({
  name: "getmylist",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMycontent.pending]: (state) => {
      state.isLoading = true; //
    },
    [__getMycontent.fulfilled]: (state, action) => {
      state.data = action.payload;
    },
    [__getMycontent.rejected]: (state, action) => {
    //   if (action.payload.response.data === "NONE_LOGIN") {
    //     localStorage.removeItem("token");
    //     alert("로그인이 필요합니다.");
    //     window.location.replace("/login");
    //   } //생략가능부분
    },
  },
});

export const {} = getMycontentSlice.actions;
export default getMycontentSlice.reducer;