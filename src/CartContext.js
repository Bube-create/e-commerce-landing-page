import { createContext, useReducer } from "react";

export const CartContext = createContext(0);
export const CartDispatch = createContext();

function cartReducer(state, action) {
	switch (action.type) {
		case "addToGlobal":
			return { ...state, qnt: action.qnt };
		case "delete":
			return { ...state, qnt: 0 };
		default:
			throw new Error("Invalid action type");
	}
}

export function CartProvider({ children }) {
	const [cart, cartDispatch] = useReducer(cartReducer, { qnt: 0 });

	return (
		<CartContext.Provider value={cart}>
			<CartDispatch.Provider value={cartDispatch}>
				{children}
			</CartDispatch.Provider>
		</CartContext.Provider>
	);
}
