import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext, CartDispatch } from "./CartContext";

const CartContent = () => {
	const cartState = useContext(CartContext);
	const cartStateDispatch = useContext(CartDispatch);

	return (
		<StyledDiv>
			<p>cart</p>

			<div>
				{cartState.qnt >= 1 ? (
					<div>
						<img
							src="./images/image-product-1-thumbnail.jpg"
							alt=""
							className="prodImg"
						/>
						<div className="cartDescription">
							<p>Fall Limited Edition Sneakers</p>
							<p>
								$125.00 x {cartState.qnt} $
								{cartState.qnt * 125.0}{" "}
							</p>
						</div>
						<div
							className="deleteBtn"
							onClick={() =>
								cartStateDispatch({ type: "delete" })
							}
						>
							<img src="./images/icon-delete.svg" alt="" />
						</div>
					</div>
				) : (
					<p>Your cart is empty</p>
				)}
				<button>Checkout</button>
			</div>
		</StyledDiv>
	);
};

export default CartContent;

const StyledDiv = styled.div`
	background-color: white;
	box-shadow: -1px 1px 5px 5px rgba(120, 122, 135, 0.75);

	& > p {
		padding: 12px 16px;
	}
	& > div {
		border-top: 2px solid black;

		padding: 16px;
	}
	& > div > div {
		display: flex;
		align-items: center;
		gap: 8px;
		.prodImg {
			width: 50px;
			border-radius: 8px;
		}

		.cartDescription {
			padding-top: 8px;
			line-height: 1.2;
		}

		.deleteBtn {
			margin-left: auto;
		}
	}

	button {
		background: hsl(26, 100%, 55%);
		border: 0;
		border-radius: 8px;
		display: inline-block;
		width: 100%;
		// margin: 0 16px;
		padding: 16px;
		color: white;
		margin-top: 16px;
	}
`;
