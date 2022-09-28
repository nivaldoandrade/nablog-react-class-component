import styled from 'styled-components';

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 16px 4px 0;
	padding: 20px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.footerBackgroundColor};
	width: calc(100% - 8px);
	position: fixed;
	bottom: 0;
`;

export const Info = styled.strong`

`;

export const Icon = styled.button`

`;