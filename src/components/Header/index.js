import React from 'react';
import { withRouter } from 'react-router-dom';

import ToggleTheme from '../ToggleTheme';
import { Navbar } from '../Navbar';

import { Container, Title, NavbarContent, RightContent } from './styles';

//useEffect(() => {}) é executado a cada renderização, e para temos o mesmo efeito em class component é só colocar a function dentro do render().
//useEffect(() => {}, []) é executado na primeira renderização, e para temos o mesmo efeito em class componet é só utilizar o componentDidMount().
//componentDidUpdate é chamado depois do render() e possui 2 parametros(prevProps e prevState) que são os valores anteriores das props e states.
//shouldComponentUpdate é chamado antes do render e possui 2 parametros(NextProps e NextState) que são os valores alterado das props e states, porém é necessario retornar um boolen, onde o TRUE vai deixar seguir o fluxo de renderização do componente e o FALSE o componente não será renderizado. 

class Header extends React.Component {
	state = {
		title: this.props.title,
		TesteDoTeste: true
	}

	handleChangeState = () => {
		this.setState({title: 'NaBlogChange', TesteDoTeste: false});
	};

	handleNavigate = () => {
		if(this.props.location.pathname !== '/') {
			this.props.history.push('/');
		};
	}

	componentDidMount() {
		console.log('componentDidMount executed');
	};

	componentDidUpdate(prevProps, prevState) {
		console.log({
			currentState: this.state,
			prevProps,
			prevState
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log(
			'shouldComponentUpdate',
			{
				currentState: this.state,
				nextProps,
				nextState
			}
		);

		return true;
	}

	render() {
		const {title} = this.state;

		return (
			<Container>
				{/* {undefined.map(item => item)} */}
				<Title>{title}</Title>
				<NavbarContent>
					<Navbar />
				</NavbarContent>
				<RightContent>
					<button onClick={this.handleNavigate}>Back to home</button>
					<ToggleTheme />
				</RightContent>
				{/* <button onClick={this.handleChangeState}>Mudar o titulo</button> */}
			</Container>
		)
	}
}

export default withRouter(Header);