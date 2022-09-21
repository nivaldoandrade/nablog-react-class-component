import React, { useEffect } from 'react';
import ToggleTheme from '../ToggleTheme';

import { Container, Title, Icon } from './styles';

//useEffect(() => {}) é executado a cada renderização, e para temos o mesmo efeito em class component é só colocar a function dentro do render().
//useEffect(() => {}, []) é executado na primeira renderização, e para temos o mesmo efeito em class componet é só utilizar o componentDidMount().

export default class Header extends React.Component {
	state = {
		title: this.props.title,
		TesteDoTeste: true
	}

	handleChangeState = () => {
		this.setState({title: 'NaBlogChange'});
	};

	componentDidMount() {
		console.log('componentDidMount executed');
	};

	render() {
		const {title} = this.state;

		console.log('rendered');

		return (
			<Container>
				<Title>{title}</Title>
				<ToggleTheme />
				<button onClick={this.handleChangeState}>Mudar o titulo</button>
			</Container>
		)
	}
}