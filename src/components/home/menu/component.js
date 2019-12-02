import React from 'react';
import PropTypes from 'prop-types';

const Menu = ({ onCreate }) => (
	<>
		<button type="button" onClick={onCreate}>
			{'Nouvelle ligne'}
		</button>
		<button type="button" onClick={e => e.preventDefault}>
			{'Exporter la liste'}
		</button>
	</>
);

export default Menu;

Menu.propTypes = {
	onCreate: PropTypes.func.isRequired,
};
