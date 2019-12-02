import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import Title from './title';
import Search from './search';
import LineList from './line-list';

const Home = ({ onCreate, onUpdate }) => (
	<>
		<Menu onCreate={onCreate} />
		<Title />
		<Search />
		<LineList onUpdate={onUpdate} />
	</>
);

export default Home;

Home.propTypes = {
	onCreate: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
};
