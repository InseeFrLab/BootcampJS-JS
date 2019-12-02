import React from 'react';
import PropTypes from 'prop-types';
import buildExtract from 'utils/build-extract';
import fakeList from 'utils/fake-list';

const Update = props => {
	const { label } = fakeList.find(
		l => l.id.toString() === buildExtract('id')(props)
	);
	return (
		<>
			<div>{`Page de modification de la ligne téléphonique ‘‘ ${label} ‘‘`}</div>
			<button type="button" onClick={() => props.history.push('/')}>
				{'Retour'}
			</button>
		</>
	);
};

export default Update;

Update.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
