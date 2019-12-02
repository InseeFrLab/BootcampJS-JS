import React from 'react';
import { PropTypes } from 'prop-types';
import Table from 'components/shared/table';
import { extendedList } from 'utils/fake-list';
import { filterArray, sortArrayByKey } from 'utils/array-utils';

const LineList = ({ search }) => {
	const sortedList = sortArrayByKey('designation')(extendedList);
	const filteredArray = filterArray(sortedList)(search).map(a => ({
		...a,
		redList: a.redList ? 'Oui' : 'Non',
	}));
	const columns = [
		{ accessor: 'designation', label: 'Désignation' },
		{ accessor: 'phoneNumber', label: 'N° de téléphone', center: true },
		{ accessor: 'redList', label: 'Liste rouge', center: true },
		{ accessor: 'office', label: 'N° de bureau', center: true },
		{ accessor: 'observation', label: 'Commentaire' },
	];
	return (
		<Table
			columns={columns}
			data={filteredArray}
			options={['edit']}
			itemsPerPage={5}
		/>
	);
};

export default LineList;

LineList.propTypes = {
	search: PropTypes.string.isRequired,
};
