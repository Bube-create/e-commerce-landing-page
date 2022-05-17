import React, { useContext, useReducer } from "react";
import styled from "styled-components";
import { CartDispatch } from "./CartContext";

function reduce(state, action) {
	switch (action.type) {
		case "reduce":
			return { ...state, qnt: state.qnt > 0 ? state.qnt-- : 0 };
		case "increase":
			return { ...state, qnt: state.qnt++ };
		default:
			throw Error("Invaid Input");
	}
}
const CartControl = () => {
	const [state, dispatch] = useReducer(reduce, { qnt: 0 });
	const globalDispatch = useContext(CartDispatch);
	return (
		<Control>
			<BtnControl>
				<div onClick={() => dispatch({ type: "reduce" })}>
					<img src="./images/icon-minus.svg" alt="" />
				</div>
				{state.qnt}
				<div onClick={() => dispatch({ type: "increase" })}>
					<img src="./images/icon-plus.svg" alt="" />{" "}
				</div>
			</BtnControl>

			<button
				onClick={() =>
					globalDispatch({ type: "addToGlobal", qnt: state.qnt })
				}
			>
				<img src="./images/icon-cart.svg" alt="" /> Add to cart
			</button>
		</Control>
	);
};

export default CartControl;
const Control = styled.div`
	display: flex;

	flex-direction: column;
	gap: 16px;

	button {
		flex: 2;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: hsl(26, 100%, 55%);
		border: 0;
		border-radius: 8px;
		gap: 8px;
		font-weight: 700;
		color: hsl(0, 0%, 100%);
		cursor: pointer;
		padding: 16px;
	}

	@media (min-width: 950px) {
		flex-direction: row;
		justify-content: space-between;
	}
`;
const BtnControl = styled.div`
	background-color: hsl(223, 64%, 98%);
	display: flex;
	padding: 8px 16px;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	border-radius: 8px;
	padding: 16px;

	div {
		cursor: pointer;
		height: 100%;
		display: flex;
		align-items: center;
	}
`;
