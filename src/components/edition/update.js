import React from 'react';
import buildExtract from 'utils/build-extract';
import { extendedList, availableNumbers } from 'utils/fake-list';
import Edition from './edition';

const Update = props => {
	const data = extendedList.find(
		l => l.id.toString() === buildExtract('id')(props)
	);
	return (
		<Edition
			title="Modifier une ligne téléphonique existante"
			data={data}
			availableNumbers={availableNumbers}
		/>
	);
};

export default Update;
