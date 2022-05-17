import React from "react";
import styled from "styled-components";

const HeaderDesktop = () => {
	return (
		<Heading>
			<h1>sneakers</h1>

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
			<div className="cart">
				<img src="./images/icon-cart.svg" alt="cart" />
			</div>
			<div className="avater">
				{" "}
				<img src="./images/image-avatar.png" alt="profile" />
			</div>
		</Heading>
	);
};

export default HeaderDesktop;

const Heading = styled.header`
	display: flex;
	position: relative;
	align-items: stretch;
	gap: 64px;
	padding: 16px 0;
	z-index: 1;
	color: hsl(220, 13%, 13%);

	button {
		cursor: pointer;
		background: transparent;
		border: 0;
	}
	.avater {
		width: 40px;
	}

	.cart {
		align-self: center;
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
`;
