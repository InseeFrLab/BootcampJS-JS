import React from 'react';
import PropTypes from 'prop-types';
import fakeList from 'utils/fake-list';

const LineList = ({ onUpdate }) => (
	<ul>
		{fakeList.map(({ id, label }) => (
			<li key={id}>
				<button type="button" onClick={() => onUpdate(id)}>
					{label}
				</button>
			</li>
		))}
	</ul>
);

export default LineList;

LineList.propTypes = {
	onUpdate: PropTypes.func.isRequired,
};
