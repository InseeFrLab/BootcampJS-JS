import { getEnv } from 'env';

const BASE_URL = getEnv()['BACKEND_PATH'];

const getData = url =>
	fetch(url, {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	}).then(res => res.json());

export const getDesignations = () => getData(`${BASE_URL}/designations`);

export const getAvailableNumbers = () =>
	getData(`${BASE_URL}/available-numbers`);

const putPost = (url, method, data) => {
	const {
		attribution,
		designation,
		division,
		observation,
		office,
		phoneNumber,
		redList,
		service,
	} = data;
	return fetch(url, {
		method,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
		body: JSON.stringify({
			attribution,
			designation,
			division,
			observation,
			office,
			phoneNumber,
			redList,
			service,
		}),
	});
};

export const postDesignation = data =>
	putPost(`${BASE_URL}/designation`, 'POST', data);

export const putDesignation = data =>
	putPost(`${BASE_URL}/designation/${data.id}`, 'PUT', data);

export const getUpdateData = id => {
	const urls = [
		`${BASE_URL}/designation/${id}`,
		`${BASE_URL}/available-numbers`,
	];
	const requests = urls.map(url =>
		fetch(url, {
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
		})
	);
	return Promise.all(requests).then(responses =>
		Promise.all(responses.map(res => res.json()))
	);
};
