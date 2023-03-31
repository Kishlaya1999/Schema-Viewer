/** @format */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		addData: (state) => {
			// logic
		},
	},
});

// Action creators are generated for each case reducer function
export const { addData } = dataSlice.actions;

export default dataSlice.reducer;
