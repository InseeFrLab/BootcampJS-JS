import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Menu = props => (
	<>
		<button type="button" onClick={() => props.history.push('/create')}>
			{'Nouvelle ligne'}
		</button>
		<button type="button" onClick={e => e.preventDefault}>
			{'Exporter la liste'}
		</button>
	</>
);

export default withRouter(Menu);

Menu.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
