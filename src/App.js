import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Posts from './components/Posts';

import { ThemeContextProvider} from './contexts/ThemeContext';

import GlobalStyle from './styles/global';


export default class App extends React.Component {

	render() {
		return (
			<ThemeContextProvider>
					<Header title="NaBlogProps"/>
					<Posts />
					<Footer />
					<GlobalStyle />
			</ThemeContextProvider>
		)
	}
}