import React from 'react';
import ToggleTheme from '../ToggleTheme';

import { Container, Title, Icon } from './styles';

export default class Header extends React.Component {
	state = {
		title: this.props.title,
		TesteDoTeste: true
	}

	handleChangeState = () => {
		console.log('handleChangeStae');
		this.forceUpdate();
		// this.setState({title: 'NaBlogChange'});
	};

	render() {
		const {title} = this.state;

		console.log('<Header /> rendered')
		return (
			<Container>
				<Title>{title}</Title>
				<ToggleTheme />
				<button onClick={this.handleChangeState}>Mudar o titulo</button>
			</Container>
		)
	}
}