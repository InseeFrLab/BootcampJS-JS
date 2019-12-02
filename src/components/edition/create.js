import React from 'react';
import { Loader, Message } from 'semantic-ui-react';
import { getAvailableNumbers, postDesignation } from 'utils/call-api';
import Edition from './edition';

class Create extends React.Component {
	constructor(props) {
		super(props);
		this.state = { availableNumbers: [], loading: true, error: undefined };
	}

	componentDidMount() {
		getAvailableNumbers()
			.then(availableNumbers =>
				this.setState({ availableNumbers, loading: false })
			)
			.catch(error => this.setState({ error, loading: false }));
	}

	render() {
		const { availableNumbers, error, loading } = this.state;
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
				title="Créer une nouvelle ligne téléphonique"
				data={{}}
				availableNumbers={availableNumbers}
				callApi={postDesignation}
			/>
		);
	}
}

export default Create;
