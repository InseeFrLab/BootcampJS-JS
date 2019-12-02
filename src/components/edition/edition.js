import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { withRouter } from 'react-router-dom';
import Title from 'components/shared/title';
import Modal from 'components/shared/modal';
import { Button, Form, Checkbox } from 'semantic-ui-react';
import buildData from 'utils/build-data';
import './edition.scss';

const emptyFormData = {
	designation: '',
	phoneNumber: '',
	redList: false,
	office: '',
	observation: '',
};

class Edition extends Component {
	constructor(props) {
		super();
		const { designation, phoneNumber } = props.data;
		this.state = {
			openModal: false,
			...emptyFormData,
			...props.data,
			waiting: designation === 'EN ATTENTE',
			availableNumbers: phoneNumber
				? [phoneNumber, ...props.availableNumbers].sort()
				: ['', ...props.availableNumbers],
		};
		this.handleChange = this.handleChange.bind(this);
		this.openModal = this.openModal.bind(this);
	}

	openModal() {
		this.setState({ openModal: true });
	}

	handleChange(key, value) {
		const toUpdate = { [key]: value };
		const { waiting } = this.state;
		if (key === 'waiting' && value === true)
			toUpdate.designation = 'EN ATTENTE';
		if (key === 'designation' && value !== 'EN ATTENTE' && waiting === true)
			toUpdate.waiting = false;
		if (key === 'designation' && value === 'EN ATTENTE' && waiting === false)
			toUpdate.waiting = true;
		this.setState({ ...toUpdate });
	}

	render() {
		const {
			openModal,
			waiting,
			designation,
			phoneNumber,
			office,
			redList,
			observation,
			availableNumbers,
		} = this.state;
		const { title, history, callApi } = this.props;
		return (
			<>
				{openModal && (
					<Modal
						onClick={() => callApi(this.state).then(() => history.push('/'))}
						data={buildData(this.state)}
					/>
				)}
				<Title label={title} />
				<Form onSubmit={this.openModal} className="form-edition">
					<Form.Checkbox
						label='Ligne téléphonique " EN ATTENTE "'
						checked={waiting}
						onChange={() => this.handleChange('waiting', !waiting)}
					/>
					<Form.Input
						inline
						label="Designation"
						placeholder="Désignation ..."
						value={designation}
						onChange={e => this.handleChange('designation', e.target.value)}
						required
					/>
					<Form.Field
						inline
						control="select"
						label="Numéro de téléphone"
						value={phoneNumber}
						onChange={e => this.handleChange('phoneNumber', e.target.value)}
						required
					>
						{availableNumbers.map(n => (
							<option key={n} value={n}>
								{n}
							</option>
						))}
					</Form.Field>
					<Form.Input
						inline
						label="Bureau"
						placeholder="N° de bureau ..."
						value={office}
						onChange={e => this.handleChange('office', e.target.value)}
					/>
					<Form.Group inline>
						<label htmlFor="red-list">Liste rouge</label>
						<Form.Field
							id="red-list"
							label="(à ne pas faire apparaître dans les exports)"
							control={Checkbox}
							checked={redList}
							onChange={() => this.handleChange('redList', !redList)}
						/>
					</Form.Group>
					<Form.Field
						label="Commentaires"
						control="textarea"
						rows="2"
						value={observation}
						onChange={e => this.handleChange('observation', e.target.value)}
						inline
					/>
					<div>
						<Button type="submit" className="main-button">
							{'Enregistrer'}
						</Button>
						<Button onClick={() => history.push('/')}>Annuler</Button>
					</div>
				</Form>
			</>
		);
	}
}

export default withRouter(Edition);

Edition.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.shape({}).isRequired,
	availableNumbers: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
	callApi: PropTypes.func.isRequired,
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};
