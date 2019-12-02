import React from 'react';
import PropTypes from 'prop-types';

const Create = ({ onReturn }) => (
	<>
		<div>Page de création d‘une ligne téléphonique</div>
		<button type="button" onClick={onReturn}>
			{'Retour'}
		</button>
	</>
);

export default Create;

Create.propTypes = {
	onReturn: PropTypes.func.isRequired,
};
