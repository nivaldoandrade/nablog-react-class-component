import React from 'react';

import {Container, Title, Content} from './styles';


export default class Post extends React.Component {
	render() {
		return (
			<Container>
				<Title>O que são states?</Title>
				<Content>
					Amet nostrud sunt cupidatat esse in fugiat ut id ut quis veniam.
				</Content>
			</Container>
		)
	}
}