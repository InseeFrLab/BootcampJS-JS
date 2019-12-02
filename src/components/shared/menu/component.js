import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Button } from 'semantic-ui-react';
import { withRouter, Link } from 'react-router-dom';
import './menu.scss';

const MenuTelephone = props => {
	const { location, history } = props;
	const isHome = location.pathname === '/';
	return (
		<Menu size="massive" id="menu">
			{!isHome && (
				<Link to="/">
					<Menu.Item header>Téléphone ☎</Menu.Item>
				</Link>
			)}
			{isHome && (
				<>
					<Menu.Item header>Téléphone ☎</Menu.Item>
					<Menu.Menu position="right" id="menu-right">
						<Button size="big" onClick={() => history.push('/create')}>
							{'Nouvelle ligne'}
						</Button>
						<Button size="big" onClick={e => e.preventDefault}>
							{'Exporter la liste'}
						</Button>
					</Menu.Menu>
				</>
			)}
		</Menu>
	);
};

export default withRouter(MenuTelephone);

MenuTelephone.propTypes = {
	history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
	location: PropTypes.shape({ pathname: PropTypes.string.isRequired })
		.isRequired,
};
