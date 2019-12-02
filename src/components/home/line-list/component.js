import React from 'react';
import { PropTypes } from 'prop-types';
import Table from 'components/shared/table';
import { filterArray, sortArrayByKey } from 'utils/array-utils';
import { getDesignations } from 'utils/call-api';
import { Loader, Message } from 'semantic-ui-react';

class List extends React.Component {
	constructor(props) {
		super(props);
		this.state = { list: [], loading: true, error: undefined };
	}

	componentDidMount() {
		getDesignations()
			.then(res => this.setState({ list: res, loading: false }))
			.catch(error => this.setState({ error, loading: false }));
	}

	render() {
		const { search } = this.props;
		const { list, error, loading } = this.state;
		if (loading)
			return (
				<Loader active inline="centered" size="massive">
					{`Chargement en cours`}
				</Loader>
			);
		if (error !== undefined) {
			return (
				<Message
					icon="world"
					header="Problème avec l'API"
					negative
					content={error.message}
				/>
			);
		}
		const sortedList = sortArrayByKey('designation')(list);
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
	}
}
export default List;

List.propTypes = {
	search: PropTypes.string.isRequired,
};
