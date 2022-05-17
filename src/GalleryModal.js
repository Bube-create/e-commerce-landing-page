import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";

function reducer(state, action) {
	switch (action.type) {
		case "next":
			if (state < 4) {
				return state + 1;
			} else {
				return 1;
			}

		case "prev":
			if (state > 1) {
				return state - 1;
			} else {
				return 4;
			}
		case "minigallery":
			return parseInt(action.payload.index);
		default:
			throw Error("Invalid Input");
	}
}

const initActive = {
	1: false,
	2: false,
	3: false,
	4: false,
};
const GalleryModal = () => {
	const [carouserNum, dispatch] = useReducer(reducer, 1);
	const [active, setActive] = useState(initActive);

	useEffect(() => {
		setActive({ ...initActive, [carouserNum]: true });
	}, [carouserNum]);
	return (
		<GallerySection>
			<img
				src={`./images/image-product-${carouserNum}.jpg`}
				alt="product"
				className="product"
			/>
			<div
				onClick={() => dispatch({ type: "prev" })}
				className="carousel-btn prev"
			>
				{" "}
				<img src="./images/icon-previous.svg" alt="" />
			</div>
			<div
				onClick={() => dispatch({ type: "next" })}
				className="carousel-btn next"
			>
				{" "}
				<img src="./images/icon-next.svg" alt="" />
			</div>

			<MiniGallery
				onClick={(e) => {
					const index = e.target.dataset.index;
					const act = { ...initActive };
					act[index] = true;
					setActive(act);
					return dispatch({
						type: "minigallery",
						payload: {
							index: e.target.dataset.index,
							element: e,
						},
					});
				}}
			>
				<img
					src="./images/image-product-1-thumbnail.jpg"
					alt=""
					data-index="1"
					className={active[1] ? "active" : null}
				/>
				<img
					src="./images/image-product-2-thumbnail.jpg"
					alt=""
					data-index="2"
					className={active[2] ? "active" : null}
				/>

				<img
					src="./images/image-product-3-thumbnail.jpg"
					alt=""
					data-index="3"
					className={active[3] ? "active" : null}
				/>
				<img
					src="./images/image-product-4-thumbnail.jpg"
					alt=""
					data-index="4"
					className={active[4] ? "active" : null}
				/>
			</MiniGallery>
		</GallerySection>
	);
};

export default GalleryModal;

const GallerySection = styled.section`
	position: relative;
	max-width: max-content;
	// height: 110vh;
	.product {
		width: 400px;
		border-radius: 16px;
	}
	.carousel-btn {
		width: 40px;
		height: 40px;
		background-color: white;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		transform: translate(-50%, -200%);
		cursor: pointer;
		display: grid;
		place-content: center;
	}

	.carousel-btn.prev {
		left: 0;
	}
	.carousel-btn.next {
		right: 0;
		transform: translate(50%, -200%);
	}
`;

const MiniGallery = styled.div`
		display: flex;
		justify-content: space-between;
		margin-top: 16px;
		img {
			width: 70px;
			border-radius: 8px;
			cursor: pointer;
		}

		img.active {
			opacity: 0.5;
			border: 3px solid hsl(26, 100%, 55%);
		}
	}
`;
