import React from 'react';
import PropTypes from 'prop-types';

const Update = ({ onReturn, label }) => (
	<>
		<div>{`Page de modification de la ligne téléphonique ‘‘ ${label} ‘‘`}</div>
		<button type="button" onClick={onReturn}>
			{'Retour'}
		</button>
	</>
);

export default Update;

Update.defaultProps = { label: 'Empty label' };

Update.propTypes = {
	onReturn: PropTypes.func.isRequired,
	label: PropTypes.string,
};
