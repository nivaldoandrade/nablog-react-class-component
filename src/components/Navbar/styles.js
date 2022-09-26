import styled from 'styled-components';

export const Container = styled.div`
	a {
		text-decoration: none;
		text-transform: uppercase;
		color: ${({theme}) => theme.textColor};
		transition: all 200ms ease-in-out;

		&:hover {
			opacity: 0.6;
		}

		& + a {
			margin-left: 8px;
		}
	}
`;