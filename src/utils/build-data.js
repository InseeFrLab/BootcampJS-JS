export default state => {
	const { designation, phoneNumber, office, redList, observation } = state;
	return {
		designation,
		'phone-number': phoneNumber,
		office,
		'red-list': redList,
		observation,
	};
};
