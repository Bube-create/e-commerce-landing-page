import styled from "styled-components";
import React from "react";
import CartControl from "./CartControl";

const Description = () => {
	return (
		<Descipt>
			<h3>Sneaker Company</h3>
			<h1>
				Fall Limited Edition <br /> Sneakers
			</h1>
			<p>
				These low-profile sneakers are your perfect casual wear
				companion. Featuring a durable rubber outer sole, they’ll
				withstand everything the weather can offer.
			</p>

			<Price>
				<p className="price">
					$125.00 <span className="percent">50%</span>
				</p>

				<p className="main-price">$250.00</p>
			</Price>

			<CartControl />
		</Descipt>
	);
};

export default Description;

const Descipt = styled.div`
	align-self: center;
	h3 {
		margin-top: 32px;

		color: hsl(26, 100%, 55%);
	}

	h1 {
		line-height: 1.1;
		font-size: 2rem;
		margin-bottom: 32px;
	}
`;

const Price = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	.price {
		font-size: 2rem;
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 16px;
	}
	.percent {
		color: hsl(26, 100%, 55%);
		background-color: hsl(220, 14%, 75%);
		font-size: 1rem;
		font-weight: normal;
		padding: 0 8px;
	}

	.main-price {
		text-decoration-line: line-through;
	}

	@media (min-width: 950px) {
		flex-direction: column;
		align-items: flex-start;
	}
`;
