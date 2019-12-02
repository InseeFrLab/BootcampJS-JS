import { UPDATE_SEARCH } from './constants';

export const updateSearch = search => ({
	type: UPDATE_SEARCH,
	payload: search,
});
