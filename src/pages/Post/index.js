import React, { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

export function Post() {
	const { id } = useParams();
	const { search } = useLocation();
	const queryParams = useMemo(() => new URLSearchParams(search), [search])

	console.log(id);
	console.log(queryParams.get('QueryParams'));
	
	return <h1>Post page</h1>
}