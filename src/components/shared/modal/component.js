import React from 'react';
import { PropTypes } from 'prop-types';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';

const ModalSave = ({ onClick, data }) => (
	<Modal basic size="small" open onClose={onClick}>
		<Header icon="archive" content="Sauvegarde" />
		<Modal.Content>
			<p>La sauvegarde a bien été effectuée :</p>
			<ul>
				{Object.entries(data).map(([key, value]) => (
					<li key={key}>{`${key} : ${value}`}</li>
				))}
			</ul>
		</Modal.Content>
		<Modal.Actions>
			<Button inverted onClick={onClick} className="btn-validation">
				<Icon name="checkmark" />
				<span>Valider</span>
			</Button>
		</Modal.Actions>
	</Modal>
);

export default ModalSave;

ModalSave.propTypes = {
	onClick: PropTypes.func.isRequired,
	data: PropTypes.shape({}).isRequired,
};
