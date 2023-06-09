/** @format */

import React from "react";
import "./Interface.css";
import SingleItem from "../SingleItem/SingleItem";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addData } from "../../features/dataSlice";

const Interface = () => {
	const dispatch = useDispatch();
	const dataArray = useSelector((c) => {
		return c.data.data;
	});

	const handleAdd = () => {
		const data = {
			id: Date.now(),
			name: "addName",
			dataType: "String",
			isRequired: false,
		};
		dispatch(addData(data));
		toast.success("One field successfully added", {
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
		<div className="interface">
			<div className="interface__top">
				<span>Field Name and type</span>
				<button className="btn" onClick={handleAdd}>
					<i className="fa-solid fa-plus"></i>
				</button>
			</div>
			<div className="interface__items">
				{dataArray &&
					dataArray.map((data, index) => (
						<SingleItem
							key={data.id}
							serialNo={index + 1}
							elementIndex={index}
							isRequired={data.isRequired}
							dataType={data.dataType}
						/>
					))}
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
{
	// <i className="fa-solid fa-trash-can"></i>;
	// <i className="fa-regular fa-pen-to-square"></i>;
	// <i className="fa-solid fa-check"></i>;
}
export default Interface;
