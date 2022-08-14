import React from 'react';
import ToggleTheme from '../ToggleTheme';

import { Container, Title, Icon } from './styles';

export default class Header extends React.Component {

	render() {
		return (
			<Container>
				<Title>NaBlog</Title>
				<ToggleTheme />
			</Container>
		)
	}
}