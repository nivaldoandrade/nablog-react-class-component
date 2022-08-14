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

export const Icon = styled.button``;