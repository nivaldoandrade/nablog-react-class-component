import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';


export default class Post extends React.Component {
	constructor(props) {
		super(props);

		const { id } = this.props.match.params;
		const { search } = this.props.location;

		this.id = id;
		this.queryParams = new URLSearchParams(search);
	};

	render() {
		console.log(this.id);
		console.log(this.queryParams.get('QueryParams'));

		return (
			<h1>Post page</h1>
		)
	}
}


// export function Post() {
// 	const { id } = useParams();
// 	const { search } = useLocation();
// 	const queryParams = useMemo(() => new URLSearchParams(search), [search])

// 	console.log(id);
// 	console.log(queryParams.get('QueryParams'));
	
// 	return <h1>Post page</h1>
// }