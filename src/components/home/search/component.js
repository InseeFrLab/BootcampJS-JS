import React from 'react';
import { PropTypes } from 'prop-types';
import { Input } from 'semantic-ui-react';
import './search.scss';

const Search = ({ search, onChange }) => (
	<div className="centered">
		<Input
			icon="search"
			value={search}
			placeholder="Rechercher ..."
			onChange={onChange}
			id="search-input"
		/>
	</div>
);

export default Search;

Search.propTypes = {
	search: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
};
