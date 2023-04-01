/** @format */

import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
	data: [],
};

export const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		addData: (state, actions) => {
			// Adds a new data in the list
			state.data = [...state.data, actions.payload];
			// console.log(actions.payload);
			// console.log(state.data);
		},
		changeName: (state, actions) => {
			let currentStateArray = state.data;
			// let objectToBechanged = currentStateArray[actions.payload.elementIndex];
			let newName = actions.payload.newName;
			let newState = currentStateArray.map((currObject, index) => {
				if (actions.payload.elementIndex == index) {
					currObject.name = newName;
				}
				return currObject;
			});
			state.data = newState;
			console.log(state.data);
		},
		changeDataTypeReducer: (state, actions) => {
			// logic for changeDataType
			let currentStateArray = state.data;
			let indexOfObjectToBeChanged = actions.payload.elementIndex;
			let newState = currentStateArray.map((currentObject, index) => {
				if (index === indexOfObjectToBeChanged) {
					currentObject.dataType = actions.payload.dataType;
				}
				return currentObject;
			});
			console.log(current(state.data));
			// console.log(indexOfObjectToBeChanged);
		},
		changeIsRequiredStatus: (state, actions) => {
			// logic for changeIsRequiredStatus
		},
	},
});

// Action creators are generated for each case reducer function
export const { addData, changeName, changeDataTypeReducer, changeIsRequiredStatus } =
	dataSlice.actions;

export default dataSlice.reducer;
