import React from 'react';
import PropTypes from 'prop-types';

const Create = props => (
	<>
		<div>Page de création d‘une ligne téléphonique</div>
		<button type="button" onClick={() => props.history.push('/')}>
			{'Retour'}
		</button>
	</>
);

export default Create;

Create.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
