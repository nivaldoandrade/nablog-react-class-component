import React from 'react';

import { ThemeContext } from '../../contexts/ThemeContext';


import { Button } from './styles';

export default class ToggleTheme extends React.Component {
	render () {
		return (
			<ThemeContext.Consumer>
				{({theme, handleChangeToggleTheme}) => (
					<Button
						onClick={handleChangeToggleTheme}
					>
						{theme === 'dark' ? '🌚' : '🌝'}
					</Button>
				)}
			</ThemeContext.Consumer>
		)
	}
}