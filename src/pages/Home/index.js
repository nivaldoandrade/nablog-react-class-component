import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import {Container, Title, Button} from './styles';

export function Home() {
	const history = useHistory();
	const {pathname} = useLocation();

	function handleNavigate() {
		if(pathname !== '/posts') {
			history.push('/posts');
		};
	};

	return (
		<Container>
			<Title>Home page</Title>
			<Button onClick={handleNavigate}>Go to posts</Button>
		</Container>
	)
}