import React from "react";
import styled from "styled-components";

const Main = ({ children }) => {
	return <MainSection>{children}</MainSection>;
};

export default Main;

const MainSection = styled.section`
	display: grid;
	grid-template-columns: 1fr;
	margin-top: 32px;
	@media (min-width: 950px) {
		grid-template-columns: 1fr 1fr;
		gap: 64px;
	}
`;
