import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Posts from './components/Posts';

import { ThemeContextProvider, ThemeContext } from './contexts/ThemeContext';

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
				<ThemeContext.Consumer>
					{({theme}) => (
						<>
							<Header title="NaBlogProps"/>
							{theme === 'dark' 
								? <Posts/> 
								: (
										<>
											<br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />	<br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />	<br /> <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br />	
										</>
									)
							}
							<Footer />
							<GlobalStyle />
						</>
					)}
				</ThemeContext.Consumer>
					
			</ThemeContextProvider>
		)
	}
}