import React from 'react';

import Routes from './routes';

import Footer from './components/Footer';
import Header from './components/Header';

import ThemeContextProvider from './contexts/ThemeContext';

import GlobalStyle from './styles/global';

//componentDidCatch é chamada quando componente pai ou filha da classe retorna algum erro. 

export default class App extends React.Component {

	componentDidCatch(error, info) {
		console.log(
			'componentDidCatch',
			{error, info}
		);
	};

	render() {
		return (
			<ThemeContextProvider>
					<Header title="NaBlogProps"/>
					<Routes />
					<Footer />
					<GlobalStyle />
			</ThemeContextProvider>
		)
	}
}