import {createSlice} from '@reduxjs/toolkit';

import type {CounterState} from '../types/counterState';

const initialState: CounterState = {
	value: 0,
};

export const counterSlice = createSlice({
	name: 'counter',
	initialState,
	reducers: {
		increment(state) {
			state.value++;
		},
		decrement(state) {
			state.value--;
		},
	},
});

// Action creators are generated for each case reducer function
export const {increment, decrement} = counterSlice.actions;

export default counterSlice.reducer;
