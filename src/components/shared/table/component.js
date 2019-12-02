import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Icon, Pagination } from 'semantic-ui-react';
import './table.scss';

const PaginationTable = ({ columns, data, options, itemsPerPage }) => {
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		const pageMax = Math.ceil(data.length / itemsPerPage) || 1;
		if (activePage > pageMax) setActivePage(pageMax);
	}, [data, activePage, itemsPerPage]);

	const handlePaginationChange = (e, { activePage: newActivePage }) => {
		setActivePage(newActivePage);
	};

	const indexOfLastItem = activePage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const pageData = data.slice(indexOfFirstItem, indexOfLastItem);
	return (
		<>
			<Table celled striped fixed id="list-table">
				<Table.Header id="list-table-header">
					<Table.Row>
						{columns.map(({ label }) => (
							<Table.HeaderCell key={label} textAlign="center">
								<h3>{label}</h3>
							</Table.HeaderCell>
						))}
						{options.map(o => (
							<Table.HeaderCell key={o} />
						))}
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{pageData.map(d => (
						<Table.Row key={d.id}>
							{columns.map(({ accessor, center }) => (
								<Table.Cell
									key={`${accessor}-${d.id}`}
									textAlign={center ? 'center' : 'left'}
								>
									{d[accessor]}
								</Table.Cell>
							))}
							{options.map(
								o =>
									o === 'edit' && (
										<Table.Cell key={`${o}-${d.id}`} textAlign="center">
											<Link to={`/update/${d.id}`}>
												<Icon name="edit" size="large" />
											</Link>
										</Table.Cell>
									)
							)}
						</Table.Row>
					))}
				</Table.Body>
			</Table>
			<div className="centered">
				<Pagination
					activePage={activePage}
					onPageChange={handlePaginationChange}
					totalPages={Math.ceil(data.length / itemsPerPage)}
					id="table-pagination"
				/>
			</div>
		</>
	);
};

export default PaginationTable;

PaginationTable.propTypes = {
	columns: PropTypes.arrayOf(
		PropTypes.shape({
			accessor: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
		}).isRequired
	).isRequired,
	data: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	itemsPerPage: PropTypes.number.isRequired,
};
