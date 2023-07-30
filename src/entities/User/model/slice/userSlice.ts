import {createSlice} from '@reduxjs/toolkit';

import type {UserSchema} from './../types/user';

const initialState: UserSchema = {};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		dummy() {},
	},
});

// Action creators are generated for each case reducer function
export const {dummy} = userSlice.actions;

export default userSlice.reducer;
