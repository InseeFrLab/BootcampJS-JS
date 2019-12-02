import React from 'react';
import { Loader, Message } from 'semantic-ui-react';
import buildExtract from 'utils/build-extract';
import { getUpdateData, putDesignation } from 'utils/call-api';
import Edition from './edition';

class Update extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			availableNumbers: [],
			designation: undefined,
			loading: true,
			error: undefined,
		};
	}

	componentDidMount() {
		const id = buildExtract('id')(this.props);
		getUpdateData(id)
			.then(([designation, availableNumbers]) =>
				this.setState({
					availableNumbers,
					designation,
					loading: false,
				})
			)
			.catch(error => this.setState({ error, loading: false }));
	}

	render() {
		const { availableNumbers, designation, error, loading } = this.state;
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
		return (
			<Edition
				title="Modifier une ligne téléphonique existante"
				data={designation}
				availableNumbers={availableNumbers}
				callApi={putDesignation}
			/>
		);
	}
}

export default Update;
