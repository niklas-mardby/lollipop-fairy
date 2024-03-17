import React, { useReducer, createContext } from "react";
import uuid from "react-uuid";

type Lollipop = {
	id: string;
	name: string;
	color: string;
	taste: string;
};

type GlobalState = {
	lollipops: Lollipop[];
};

const initialState: GlobalState = {
	lollipops: [
		{
			id: uuid(),
			name: "Happy Blue Burst",
			color: "Dark blue",
			taste: "Blueberry",
		},
	],
};

type Action =
	| { type: "ADD_LOLLIPOP"; payload: Lollipop }
	| { type: "REMOVE_LOLLIPOP"; payload: string };

const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_LOLLIPOP":
			return {
				...state,
				lollipops: [...state.lollipops, action.payload],
			};
		case "REMOVE_LOLLIPOP":
			return {
				...state,
				lollipops: state.lollipops.filter((l) => l.id !== action.payload),
			};
		default:
			return state;
	}
};

export const GlobalStateContext = createContext<{
	state: GlobalState;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

type GlobalStateProviderProp = {
	children: React.ReactNode;
};
export const GlobalStateProvider = ({ children }: GlobalStateProviderProp) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<GlobalStateContext.Provider value={{ state, dispatch }}>
			{children}
		</GlobalStateContext.Provider>
	);
};
