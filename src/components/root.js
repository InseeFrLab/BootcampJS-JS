import React, { Component } from 'react';
import fakeList from 'utils/fake-list';
import Home from './home';
import { Create, Update } from './edition';

class Root extends Component {
	constructor() {
		super();
		this.state = { page: 'home', id: '' };
		this.handleCreate = this.handleCreate.bind(this);
		this.handleUpdate = this.handleUpdate.bind(this);
		this.handleReturn = this.handleReturn.bind(this);
	}

	handleCreate() {
		this.setState({ page: 'create', id: '' });
	}

	handleUpdate(id) {
		this.setState({ page: 'update', id });
	}

	handleReturn() {
		this.setState({ page: 'home', id: '' });
	}

	render() {
		const { page, id } = this.state;
		return (
			<>
				{page === 'home' && (
					<Home onCreate={this.handleCreate} onUpdate={this.handleUpdate} />
				)}
				{page === 'create' && <Create onReturn={this.handleReturn} />}
				{page === 'update' && (
					<Update
						onReturn={this.handleReturn}
						label={fakeList.find(l => l.id === id).label}
					/>
				)}
			</>
		);
	}
}

export default Root;
