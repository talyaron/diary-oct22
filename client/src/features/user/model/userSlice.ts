/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../model/store";

export interface UserType {
  name: string;
  password: string;
}

const initUser: UserType = {
  name: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initUser },
  reducers: {
    addUser: (state, action) => {
      const { name, password } = action.payload;
      state.value.name = name;
      state.value.password = password;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
