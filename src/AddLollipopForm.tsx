import { useState, useContext } from "react";
import { GlobalStateContext } from "./GlobalState";

const AddLollipopForm = () => {
	const [name, setName] = useState("");
	const { dispatch } = useContext(GlobalStateContext);

	const handleAddLollipop = () => {
		if (name) {
			dispatch({
				type: "ADD_LOLLIPOP",
				payload: name,
			});
			setName("");
		}
	};

	return (
		<div>
			<h2>Add Lollipop</h2>
			<input
				type="text"
				placeholder="Lollipop Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={handleAddLollipop}>Add</button>
		</div>
	);
};

export default AddLollipopForm;
