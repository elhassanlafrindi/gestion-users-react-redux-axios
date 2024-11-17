import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiStatus, IuserState, users } from "./user.type";
import getUserList from "./Userservice";
const initialState: IuserState = {
  list: [],
  listStatus: ApiStatus.ideal,
};
export const getUserlistAction = createAsyncThunk(
  "user/getUserList",
  async () => {
    const response = await getUserList();
    return response.data;
  }
);
export const setuserAction = createAsyncThunk(
  "user/setUser",
  async (form: Iuser, { rejectWithValue }) => {
    try {
      return await setuser(form);
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
const UserSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUserlistAction.pending, (state) => {
      state.listStatus = ApiStatus.loading;
    }),
      builder.addCase(getUserlistAction.fulfilled, (state, action) => {
        state.list = action.payload;
        state.listStatus = ApiStatus.ideal;
      }),
      builder.addCase(getUserlistAction.rejected, (state) => {
        state.listStatus = ApiStatus.error;
      }),
      builder.addCase(setuserAction.pending, (state) => {
        state.listStatus = ApiStatus.loading;
      }),
      builder.addCase(setuserAction.fulfilled, (state, action: any) => {
        state.listStatus = ApiStatus.ideal;
        state.list.push(action.payload);
      }),
      builder.addCase(setuserAction.rejected, (state) => {
        state.listStatus = ApiStatus.error;
      });
  },
});
export default UserSlice.reducer;
export const {} = UserSlice.actions;
