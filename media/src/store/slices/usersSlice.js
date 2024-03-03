import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers(builder) {
    //watching for pending, fulfilled and failed requests from the thunk(api request)
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const usersReducer = usersSlice.reducer;
