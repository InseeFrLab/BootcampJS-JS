import React from 'react';
import { Link } from 'react-router-dom';
import fakeList from 'utils/fake-list';

const LineList = () => (
	<ul>
		{fakeList.map(({ id, label }) => (
			<li key={id}>
				<Link to={`/update/${id}`}>{label}</Link>
			</li>
		))}
	</ul>
);

export default LineList;
