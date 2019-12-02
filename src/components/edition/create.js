import React from 'react';
import { availableNumbers } from 'utils/fake-list';
import Edition from './edition';

const Create = () => (
	<Edition
		title="Créer une nouvelle ligne téléphonique"
		data={{}}
		availableNumbers={availableNumbers}
	/>
);

export default Create;
