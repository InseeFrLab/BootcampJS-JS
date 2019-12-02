import React, { Component } from 'react';
import Title from 'components/shared/title';
import Search from './search';
import LineList from './line-list';

class Home extends Component {
	constructor() {
		super();
		this.state = { search: '' };
		this.handleChangeSearch = this.handleChangeSearch.bind(this);
	}

	handleChangeSearch(event) {
		this.setState({ search: event.target.value });
	}

	render() {
		const { search } = this.state;
		return (
			<div className="container">
				<Title label="Liste des lignes téléphoniques" />
				<Search search={search} onChange={this.handleChangeSearch} />
				<LineList search={search} />
			</div>
		);
	}
}

export default Home;
