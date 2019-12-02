import deburr from 'lodash.deburr';

export const filterArray = array => string =>
	array.reduce((_, obj) => {
		if (
			deburr(Object.values(obj).join(''))
				.trim()
				.toLowerCase()
				.includes(deburr(string.toLowerCase()))
		)
			_.push(obj);
		return _;
	}, []);

export const sortArrayByKey = key => (arr, desc = false) => {
	const order = desc ? 1 : -1;
	return arr.sort((a, b) => {
		const aUp = deburr(a[key]).toLowerCase();
		const bUp = deburr(b[key]).toLowerCase();
		if (bUp > aUp) return order;
		return bUp === aUp ? 0 : -order;
	});
};
