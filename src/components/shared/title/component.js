import React from 'react';
import { PropTypes } from 'prop-types';
import './title.scss';

const Title = ({ label }) => (
	<div className="centered">
		<div className="app-title">{label}</div>
	</div>
);

export default Title;

Title.propTypes = {
	label: PropTypes.string.isRequired,
};
