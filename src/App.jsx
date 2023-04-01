/** @format */

import "./App.css";
import Footer from "./components/Footer/Footer";
import Interface from "./components/Interface/Interface.jsx";
import { useSelector } from "react-redux";

function App() {
	const data = useSelector((d) => {
		return d.data.data;
	});
	// console.log(data);

	const consoleUpdatedData = () => {
		console.log(data);
	};

	return (
		<div className="App">
			<Interface />
			<button className="save_button" onClick={consoleUpdatedData}>
				Save
			</button>
			<Footer />
		</div>
	);
}

export default App;
