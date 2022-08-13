import React from 'react';
import Post from '../Post';

import {Container} from './styles';

const ListPosts = [
	{
		title: 'O que são states?',
		content: 'Exercitation esse nostrud nisi consequat voluptate sunt proident incididunt id elit veniam ut.'
	},
	{
		title: 'O que são states?',
		content: 'Exercitation esse nostrud nisi consequat voluptate sunt proident incididunt id elit veniam ut.'
	},
	{
		title: 'O que são states?',
		content: 'Exercitation esse nostrud nisi consequat voluptate sunt proident incididunt id elit veniam ut.'
	},
	{
		title: 'O que são states?',
		content: 'Exercitation esse nostrud nisi consequat voluptate sunt proident incididunt id elit veniam ut.'
	}
]

export default class Posts extends React.Component {

	render() {

		return (
			<Container>
				{ListPosts.map(post => (
					<Post title={post.title} content={post.content} />
				))}
			</Container>
		)
	}
}