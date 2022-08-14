import React from 'react';

import ToggleTheme from '../ToggleTheme';

import { Container, Info} from './styles';

export default class Footer extends React.Component {

	render() {
		return (
			<Container>
				<Info>
					NaBlog. Todos os direitos reservados.
				</Info>
				<ToggleTheme />
			</Container>
		)
	}
}