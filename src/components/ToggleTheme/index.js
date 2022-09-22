import React from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';

import { Button } from './styles';

function HOC(ComponentToggleTheme) {
	return class Componet extends React.Component {
		render() {
			return (
				<ThemeContext.Consumer>
					{(value) => (
						<ComponentToggleTheme {...value}/>
					)}
				</ThemeContext.Consumer>
			)
		}
	}
}

class ToggleTheme extends React.Component {
	componentDidUpdate(prevProps, prevState) {
		if(this.props.theme !== prevProps.theme) {
			console.log('ToogleThemeComponent','O theme mudou...');
		};
	};

	render () {
		return (
				<Button onClick={this.props.handleChangeToggleTheme}>
					{this.props.theme === 'dark' ? '🌚' : '🌝'}
				</Button>
		)
	}
}

export default HOC(ToggleTheme);