import React, {createContext, useContext, useState} from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '../styles/themes';

export const ThemeContext = createContext({});

export default class ThemeContextProvider extends React.Component {
	state = {
		theme: 'dark'
	}

	handleChangeToggleTheme = () => {
		this.setState(prevState => ({
			theme: prevState.theme === 'dark' ? 'light' : 'dark'
		}));
	}

	render() {
		return (
		<ThemeContext.Provider 
			value={{
				theme: this.state.theme, 
				handleChangeToggleTheme: this.handleChangeToggleTheme
			}}
		>
			<ThemeProvider theme={themes[this.state.theme]}>
				{this.props.children}
			</ThemeProvider>
		</ThemeContext.Provider>
		)
	}
}
