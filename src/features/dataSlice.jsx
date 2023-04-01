/** @format */

import { createSlice } from "@reduxjs/toolkit";

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
		},
		changeName: (state, actions) => {
			let currentStateArray = state.data;
			let newName = actions.payload.newName;
			let newState = currentStateArray.map((currObject, index) => {
				if (actions.payload.elementIndex == index) {
					currObject.name = newName;
				}
				return currObject;
			});
			state.data = newState;
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
			state.data = newState;
		},
		changeIsRequiredStatusReducer: (state, actions) => {
			// logic for changeIsRequiredStatus
			let currentStateArray = state.data;
			let indexOfObjectToBeChanged = actions.payload.elementIndex;
			let newState = currentStateArray.map((currentObject, index) => {
				if (index === indexOfObjectToBeChanged) {
					currentObject.isRequired = actions.payload.isRequiredStatus;
				}
				return currentObject;
			});
			state.data = newState;
		},
		deleteData: (state, actions) => {
			// logic for deleting data
			let currentStateArray = state.data;
			let indexOfObjectToBeChanged = actions.payload;
			let newState = currentStateArray.filter(
				(currentObject, index) => index !== indexOfObjectToBeChanged
			);
			state.data = newState;
		},
	},
});

export const {
	addData,
	changeName,
	changeDataTypeReducer,
	changeIsRequiredStatusReducer,
	deleteData,
} = dataSlice.actions;

export default dataSlice.reducer;
