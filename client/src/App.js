import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import NotFound from './components/layout/NotFound';
import Iphone from './components/collection/Iphone';
import Macbook from './components/collection/Macbook';
import PrivateRoute from './components/routing/PrivateRoute';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';

import './App.css';

const App = () => {
	useEffect(() => {
		if (localStorage.token) {
			store.dispatch(loadUser());
		}
	}, []);
	return (
		<Provider store={store}>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route path="/" exact component={Login} />
						<Route exact path="/register" component={Register} />
						<PrivateRoute exact path="/iphone" component={Iphone} />
						<PrivateRoute exact path="/macbook" component={Macbook} />
						<Route component={NotFound} />
					</Switch>
				</Fragment>
			</Router>
		</Provider>
	);
};

export default App;
