/** @format */

import React from "react";
import "./SingleItem.css";
import {
	changeName,
	changeDataTypeReducer,
	changeIsRequiredStatus,
} from "../../features/dataSlice";
import { useDispatch } from "react-redux";

const SingleItem = ({ serialNo, elementIndex }) => {
	const dispatch = useDispatch();

	const changeSpanToInputTag = (e) => {
		// console.log(e.target);
		let nameSpan = e.target;
		let nameSpanContainer = nameSpan.parentNode.children;
		let inputTag = nameSpanContainer[1];
		let checkIcon = nameSpanContainer[2];
		inputTag.style.display = "block";
		checkIcon.style.display = "block";
		// console.log(nameSpanContainer);
		nameSpan.innerHTML = "";
		// console.log(nameSpanContainer);
	};

	const changeAndSetName = (e, elementIndex) => {
		let checkBtn = e.target;
		let nameSpanContainer = checkBtn.parentNode.children;
		let nameSpan = nameSpanContainer[0];
		let inputTag = nameSpanContainer[1];
		nameSpan.innerHTML = inputTag.value;
		inputTag.style.display = "none";
		checkBtn.style.display = "none";
		let newName = inputTag.value;
		dispatch(changeName({ newName, elementIndex }));
	};

	const changeDataType = (e, elementIndex) => {
		// console.log(e.target.value, elementIndex);
		let dataType = e.target.value;
		dispatch(changeDataTypeReducer({ dataType, elementIndex }));
	};

	return (
		<div className="interface__single_item">
			<div className="item__left">
				<span className="item__serial">{serialNo}.</span>
				<div className="item__name_container">
					<span className="item__name" onClick={changeSpanToInputTag}>
						addName
					</span>
					<input
						type="text"
						className="item__name_edit_container"
						placeholder="Enter the text"
						style={{ display: "none" }}
					/>
					<i
						className="fa-solid fa-check"
						style={{ display: "none" }}
						onClick={(e) => changeAndSetName(e, elementIndex)}></i>
				</div>
				<select
					name=""
					className="items__datatype_dropdown"
					onChange={(e) => {
						changeDataType(e, elementIndex);
					}}>
					<option value="string">String</option>
					<option value="number">Number</option>
					<option value="boolean">Boolean</option>
					<option value="object">Object</option>
				</select>
			</div>
			<div className="item__right">
				<span>Required</span>
				<div>
					<label className="toggle-switch">
						<input
							type="checkbox"
							onChange={(e) => {
								console.log(e.target.checked);
							}}
						/>
						<span className="toggle-slider"></span>
					</label>
				</div>
				<button className="btn">
					<i className="fa-solid fa-plus"></i>
				</button>
				<button className="btn">
					<i className="fa-solid fa-trash-can"></i>
				</button>
			</div>
		</div>
	);
};

export default SingleItem;
