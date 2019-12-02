import React from 'react';
import Title from 'components/shared/title';
import SearchContainer from './search';
import LineListContainer from './line-list';

const Home = () => (
	<div className="container">
		<Title label="Liste des lignes téléphoniques" />
		<SearchContainer />
		<LineListContainer />
	</div>
);

export default Home;
