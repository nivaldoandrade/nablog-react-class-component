import React from 'react';
import ToggleTheme from '../ToggleTheme';

import { Container, Title, Icon } from './styles';

export default class Header extends React.Component {
	state = {
		title: this.props.title,
		TesteDoTeste: true
	}

	handleChangeState = () => {
		console.log({stateAfter: this.state});

		this.setState({title: 'NaBlogChange'});
	};

	render() {
		const {title} = this.state;

		return (
			<Container>
				<Title>{title}</Title>
				<ToggleTheme />
				<button onClick={this.handleChangeState}>Mudar o titulo</button>
			</Container>
		)
	}
}