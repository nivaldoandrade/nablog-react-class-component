import styled from 'styled-components';

export const Container = styled.div`
	padding: 16px;
	margin: 0 4px;
	border-radius: 5px;
	background-color: ${({ theme }) => theme.postBackgroundColor};

	& + div {
		margin-top: 8px;
	}
`;
export const Title = styled.h1`
	font-size: 24px;
`;
export const Content = styled.p`
`;

