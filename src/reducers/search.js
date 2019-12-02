import { UPDATE_SEARCH } from 'actions/constants';

const defaultState = '';

export default (state = defaultState, action) => {
	switch (action.type) {
		case UPDATE_SEARCH:
			return action.payload;

		default:
			return state;
	}
};
