import React, { useReducer, createContext } from "react";
import uuid from "react-uuid";

type FairyLollipop = {
	id: string;
	name: string;
	flavor: string;
	color: string;
	sparkleLevel: number;
	hasWings: boolean;
	magicPower: string | null;
};

type GlobalState = {
	lollipops: FairyLollipop[];
};

const initialState: GlobalState = {
	lollipops: [
		{
			id: uuid(),
			name: "Sparkle Dream",
			flavor: "Cotton Candy",
			color: "Pink",
			sparkleLevel: 8,
			hasWings: true,
			magicPower: "Grants wishes",
		},
		{
			id: uuid(),
			name: "Enchanted Twilight",
			flavor: "Blueberry",
			color: "Purple",
			sparkleLevel: 6,
			hasWings: false,
			magicPower: "Levitation",
		},
		{
			id: uuid(),
			name: "Whimsical Whirl",
			flavor: "Strawberry",
			color: "Red",
			sparkleLevel: 9,
			hasWings: true,
			magicPower: null,
		},
	],
};

type Action =
	| { type: "ADD_LOLLIPOP"; payload: string }
	| { type: "REMOVE_LOLLIPOP"; payload: string };

const reducer = (state: GlobalState, action: Action): GlobalState => {
	switch (action.type) {
		case "ADD_LOLLIPOP":
			return {
				...state,
				lollipops: [
					...state.lollipops,
					{
						id: uuid(),
						name: action.payload,
						flavor: "",
						color: "",
						sparkleLevel: 0,
						hasWings: false,
						magicPower: null,
					} as FairyLollipop,
				],
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
