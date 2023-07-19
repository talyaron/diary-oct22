/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../model/store";
import { registerAsync } from "../controlers/userAPI";

export interface UserType {
    name: string;
    password: string;
}

interface UserState {
    user: UserType | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState: UserState = {
    user: null,
    status: 'idle',
};


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        addUser: (state, action) => {
            const { name, password } = action.payload;
            state.user = { name, password };
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(registerAsync.fulfilled, (state, action) => {
            // Add user to the state array
            const { name, password } = action.payload;


            state.user = { name, password };
        });
    },
});

// Action creators are generated for each case reducer function
export const { addUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
