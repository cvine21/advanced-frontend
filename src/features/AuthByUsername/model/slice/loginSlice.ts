import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {LoginSchema} from '../types/loginSchema';

const initialState: LoginSchema = {
	isLoading: false,
	username: '',
	password: '',
};

export const loginSlice = createSlice({
	name: 'login',
	initialState,
	reducers: {
		setUsername(state, action: PayloadAction<string>) {
			state.username = action.payload;
		},
		setPassword(state, action: PayloadAction<string>) {
			state.password = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const {setUsername, setPassword} = loginSlice.actions;

export default loginSlice.reducer;
