import React, { useState } from 'react';
import fakeList from 'utils/fake-list';
import Home from './home';
import { Create, Update } from './edition';

const Root = () => {
	const [page, setPage] = useState('home');
	const [id, setId] = useState('');

	const handleCreate = () => {
		setPage('create');
		setId('');
	};

	const handleUpdate = newId => {
		setPage('update');
		setId(newId);
	};

	const handleReturn = () => {
		setPage('home');
		setId('');
	};

	return (
		<>
			{page === 'home' && (
				<Home onCreate={handleCreate} onUpdate={handleUpdate} />
			)}
			{page === 'create' && <Create onReturn={handleReturn} />}
			{page === 'update' && (
				<Update
					onReturn={handleReturn}
					label={fakeList.find(l => l.id === id).label}
				/>
			)}
		</>
	);
};

export default Root;
