import React, { useContext, useState } from "react";
import styled from "styled-components";
import CartContent from "./CartContent";
import { CartContext } from "./CartContext";
const Header = () => {
	const [navToggle, setNavToggle] = useState(false);
	const [showCart, setShowCart] = useState(false);
	const cartState = useContext(CartContext);
	return (
		<Heading>
			<ButtonShape>
				<button
					onClick={() => setNavToggle(!navToggle)}
					style={{ display: navToggle ? "none" : "block" }}
				>
					<img src="./images/icon-menu.svg" alt="menu" />
				</button>
			</ButtonShape>
			<h2>sneakers</h2>

			<Navigation>
				<ul>
					<li>
						<a href="#collections">Collections</a>
					</li>
					<li>
						<a href="#men">Men</a>
					</li>
					<li>
						<a href="#women">Women</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
				</ul>
			</Navigation>

			<NavigationBackground
				style={{ display: navToggle ? "block" : "none" }}
			>
				<MobileNavigation>
					<ButtonShape className="close-btn">
						<button
							onClick={() => setNavToggle(!navToggle)}
							style={{
								display: navToggle ? "block" : "none",
							}}
						>
							<img src="./images/icon-close.svg" alt="menu" />
						</button>
					</ButtonShape>

					<ul>
						<li>
							<a href="#collections">Collections</a>
						</li>
						<li>
							<a href="#men">Men</a>
						</li>
						<li>
							<a href="#women">Women</a>
						</li>
						<li>
							<a href="#about">About</a>
						</li>
						<li>
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</MobileNavigation>
			</NavigationBackground>
			<div className="cart" onClick={() => setShowCart(!showCart)}>
				{cartState.qnt > 1 ? <CartNotif>1</CartNotif> : ""}
				<img src="./images/icon-cart.svg" alt="cart" />
			</div>

			<div className="cart-cont">
				{showCart ? (
					<div className="cart-content">
						<CartContent />
					</div>
				) : null}
			</div>

			<div className="avater">
				{" "}
				<img src="./images/image-avatar.png" alt="profile" />
			</div>
		</Heading>
	);
};

export default Header;

const Heading = styled.header`
	display: flex;
	position: relative;
	align-items: center;
	gap: 16px;
	height: 10vh;
	z-index: 1;

	.avater {
		width: 40px;
	}

	h2 {
		margin-right: auto;
		align-self: center;
	}

	img {
		cursor: pointer;
	}

	@media (min-width: 950px) {
		height: 15vh;

		align-items: stretch;
		// gap: 64px;
		padding: 16px 0;
		z-index: 1;
		color: hsl(220, 13%, 13%);

		button {
			cursor: pointer;
			// background: transparent;
			border: 0;
		}
		.avater {
			align-self: center;
			width: 40px;
		}

		.cart {
			align-self: center;
		}
	}

	.cart-cont {
		position: absolute;

		top: 170%;

		// max-width: 95%;
		margin: 0px;
		// border: solid;
		width: 95%;
		right: 2.5%;

		@media (min-width: 950px) {
			top: 80%;
			right: 8%;
			width: max-content;
		}
	}
`;

const ButtonShape = styled.div`
	width: 40px;
	height: 40px;
	// border: solid;
	display: flex;
	justify-content: center;
	align-items: center;

	& button {
		cursor: pointer;
		background: transparent;
		border: 0;
	}

	@media (min-width: 950px) {
		display: none;
	}
`;
const MobileNavigation = styled.nav`
	background-color: white;
	height: 100%;
	width: 65%;
	padding-left: 16px;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;
	animation: movement 400ms ease-out alternate;

	@keyframes movement {
		0% {
			transform: translateX(-100%);
		}

		100% {
			transform: translateX(0%);
		}
	}
	.close-btn {
		margin-top: 12px;
	}
	ul {
		margin: 0;
		margin-top: 32px;
		list-style-type: none;
		padding: 0;

		li {
			margin: 16px 0;
			a {
				text-decoration: none;
				color: inherit;
				font-weight: 700;
			}
		}
	}

	@media (min-width: 950px) {
		display: none;
	}
`;

const NavigationBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1;

	// border: solid deeppink;
	width: 100%;
	height: 100%;
	background-color: hsl(0, 0%, 0%, 0.75);

	@media (min-width: 950px) {
		display: none;
	}
`;

const Navigation = styled.nav`
	margin-right: auto;

	ul {
		list-style-type: none;
		padding: 0;
		display: flex;
		align-items: center;
		gap: 32px;
		height: 100%;
		li {
			height: 100%;
			display: flex;
			align-items: center;
			a {
				text-decoration: none;
				color: inherit;
				font-weight: 700;
			}

			&:hover {
				border-bottom: 1px solid deeppink;
			}
		}
	}
	display: none;

	@media (min-width: 950px) {
		display: block;
	}
`;

const CartNotif = styled.div`
	background-color: hsl(26, 100%, 55%);
	border-radius: 50%;
	display: grid;
	place-content: center;
	color: white;
`;
