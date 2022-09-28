import styled from "styled-components";

export const Container = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.headerBackgroundColor};
	padding: 20px;
	border-radius: 5px;
	margin: 4px;
`;

export const Title = styled.h1``;

export const NavbarContent = styled.div``;

export const RightContent = styled.div`
	display: flex;
	align-items: center;
	justify-items: center;
	gap: 8px;

	button {
		font-size: 18px;
		color: ${({theme}) => theme.textColor};
		background: transparent;
		border: 0;
	}
`;