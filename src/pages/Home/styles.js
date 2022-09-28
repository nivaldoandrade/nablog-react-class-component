import styled from 'styled-components';

export const Container = styled.div`
	margin: 4px;
`;

export const Title = styled.h1``;

export const Button = styled.button`
	font-size: 18px;
	color: ${({theme}) => theme.textColor};
	background-color: transparent;
	border: 0;
	margin-top: 8px;
`;