import { useContext } from "react";
import { GlobalStateContext } from "./GlobalState";

const LollipopsList = () => {
	const { state, dispatch } = useContext(GlobalStateContext);

	const handleRemoveLollipop = (id: string) => {
		dispatch({ type: "REMOVE_LOLLIPOP", payload: id });
	};

	return (
		<div>
			<h2>Lollipops</h2>
			<ul>
				{state.lollipops.map((lollipop) => (
					<li key={lollipop.id}>
						<span>{lollipop.name}</span>
						<button onClick={() => handleRemoveLollipop(lollipop.id)}>
							Remove
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default LollipopsList;
