import Gallery from "./Gallery";
import styled from "styled-components";
import Main from "./Main";

// import HeaderDesktop from "./HeaderDesktop";
import Header from "./Header";
import Description from "./Description";
import { CartProvider } from "./CartContext.js";
import GalleryModal from "./GalleryModal";
import { useState } from "react";

function App() {
	const [modalBtn, setModalBtn] = useState(false);
	return (
		<CartProvider>
			<Wrapper>
				<div className="App">
					<Header />

					<Main>
						<Gallery setModalBtn={setModalBtn} />
						<Description />
					</Main>
				</div>
			</Wrapper>
			{modalBtn ? (
				<StyledDiv>
					<div
						className="close-btn"
						onClick={() => setModalBtn(false)}
					>
						<img src="./images/icon-close.svg" alt="" />
					</div>
					<GalleryModal />
				</StyledDiv>
			) : null}
		</CartProvider>
	);
}

export default App;
const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 16px;

	@media (min-width: 950px) {
		padding: 0 64px;
	}
`;

const StyledDiv = styled.div`
	display: none;

	@media (min-width: 950px) {
		z-index: 5;
		position: absolute;
		top: 0;
		width: 100%;
		min-height: 120vh;
		background-color: hsl(0, 0%, 0%, 0.75);
		display: grid;
		place-content: center;

		.close-btn {
			width: max-content;
			justify-self: end;
			margin-bottom: 32px;
			cursor: pointer;
			img {
				width: 20px;
			}
		}
	}
`;
