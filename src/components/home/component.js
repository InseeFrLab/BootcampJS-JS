import React from 'react';
import Menu from './menu';
import Title from './title';
import Search from './search';
import LineList from './line-list';

const Home = () => (
	<>
		<Menu />
		<div className="container">
			<Title />
			<Search />
			<LineList />
		</div>
	</>
);

export default Home;
