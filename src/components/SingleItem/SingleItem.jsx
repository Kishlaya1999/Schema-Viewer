/** @format */

import React, { useEffect, useState } from "react";
import "./SingleItem.css";
import {
	changeName,
	changeDataTypeReducer,
	changeIsRequiredStatusReducer,
	deleteData,
} from "../../features/dataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const SingleItem = ({ serialNo, elementIndex, isRequired, dataType }) => {
	const dispatch = useDispatch();
	const [currentIsRequired, setCurrentIsRequired] = useState(isRequired);
	const [isRequiredDisable, setIsRequiredDisable] = useState(false);

	const changeSpanToInputTag = (e) => {
		let nameSpan = e.target;
		let nameSpanContainer = nameSpan.parentNode.children;
		let inputTag = nameSpanContainer[1];
		let checkIcon = nameSpanContainer[2];
		inputTag.style.display = "block";
		checkIcon.style.display = "block";
		nameSpan.innerHTML = "";
		setIsRequiredDisable(true);
	};

	const changeAndSetName = (e, elementIndex) => {
		let checkBtn = e.target;
		let nameSpanContainer = checkBtn.parentNode.children;
		let nameSpan = nameSpanContainer[0];
		let inputTag = nameSpanContainer[1];
		if (inputTag.value === "") {
			toast.error("No name added !!", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			return;
		}
		nameSpan.innerHTML = inputTag.value;
		inputTag.style.display = "none";
		checkBtn.style.display = "none";
		let newName = inputTag.value;
		dispatch(changeName({ newName, elementIndex }));
		setIsRequiredDisable(false);
	};

	const changeDataType = (e, elementIndex) => {
		let dataType = e.target.value;
		dispatch(changeDataTypeReducer({ dataType, elementIndex }));
	};

	const changeIsRequired = (e, elementIndex) => {
		setCurrentIsRequired(!currentIsRequired);
		let isRequiredStatus = e.target.checked;
		dispatch(changeIsRequiredStatusReducer({ isRequiredStatus, elementIndex }));
	};

	const deleteItemFromList = (e, elementIndex) => {
		dispatch(deleteData(elementIndex));
		toast.error("One field deleted", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	const objectNotification = () => {
		toast.info("Feature Yet to be developed", {
			position: "top-right",
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "dark",
		});
	};

	return (
		<div>
			<div className="interface__single_item">
				<div className="item__left">
					<span className="item__serial">{serialNo}.</span>
					<div className="item__name_container">
						<span className="item__name" onClick={changeSpanToInputTag}>
							addName
						</span>
						{currentIsRequired ? "*" : " "}
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
									changeIsRequired(e, elementIndex);
								}}
								disabled={isRequiredDisable}
								// title="fasdkjfo"
							/>
							<span className="toggle-slider"></span>
						</label>
					</div>
					{dataType === "object" ? (
						<button className="btn" onClick={objectNotification}>
							<i className="fa-solid fa-plus"></i>
						</button>
					) : (
						""
					)}

					<button
						className="btn"
						onClick={(e) => {
							deleteItemFromList(e, elementIndex);
						}}>
						<i className="fa-solid fa-trash-can"></i>
					</button>
				</div>
			</div>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="dark"
			/>
		</div>
	);
};

export default SingleItem;
