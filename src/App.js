import React from 'react';
import {ThemeProvider} from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Posts from './components/Posts';

import themes from './styles/themes';

import GlobalStyle from './styles/global';


export default class App extends React.Component {

	render() {
		return (
			<ThemeProvider theme={themes.dark}>
				<Header />
				<Posts />
				<Footer />
				<GlobalStyle />
			</ThemeProvider>
		)
	}
}