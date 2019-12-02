import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from 'components/shared/menu';
import Home from './home';
import { Create, Update } from './edition';

const Root = () => (
	<Router>
		<>
			<Menu />
			<div className="container">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/create" component={Create} />
					<Route exact path="/update/:id" component={Update} />
					<Route component={() => <div>Not found</div>} />
				</Switch>
			</div>
		</>
	</Router>
);

export default Root;
