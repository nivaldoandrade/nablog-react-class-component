import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export function Navbar() {
	return (
		<Container>
			<Link to="/">Home</Link>
			<Link to="/posts">Post</Link>		
		</Container>
	)
}