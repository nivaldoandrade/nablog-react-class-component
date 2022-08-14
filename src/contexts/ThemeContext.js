import React, {createContext, useContext, useState} from 'react';
import { ThemeProvider } from 'styled-components';


import themes from '../styles/themes';

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
	const [theme, setTheme] = useState('dark');

	function handleChangeToggleTheme() {
		setTheme(state => state === 'dark' ? 'light' : 'dark');
	}

	return (
		<ThemeContext.Provider 
			value={{
				theme, 
				handleChangeToggleTheme
			}}
		>
			<ThemeProvider theme={themes[theme]}>
				{children}
			</ThemeProvider>
		</ThemeContext.Provider>
	)
} 

export function useTheme() {
	return useContext(ThemeContext);
}