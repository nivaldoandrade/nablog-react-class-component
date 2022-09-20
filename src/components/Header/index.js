import React from 'react';
import ToggleTheme from '../ToggleTheme';

import { Container, Title, Icon } from './styles';

export default class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			teste: this.props.title,
			TesteDoTeste: true
		}

		this.handleChangeState = this.handleChangeState.bind(this);
	}

	handleChangeState() {
		console.log({stateAfter: this.state});

		this.setState({teste: 'NaBlogChange'});
	};

	render() {
		return (
			<Container>
				<Title>{this.state.teste}</Title>
				<ToggleTheme />
				<button onClick={this.handleChangeState}>Mudar o titulo</button>
			</Container>
		)
	}
}