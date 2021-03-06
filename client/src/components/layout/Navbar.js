import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
	const authLinks = (
		<ul>
			<li>
				<Link to="/iphone">iPhone</Link>
			</li>
			<li>
				<Link to="/macbook">MacBookPro</Link>
			</li>
			<li>
				<Link to="/watch">Watch</Link>
			</li>
			<li>
				<a className="btn" onClick={logout} href="#!">
					<i className="fas fa-sign-out-alt" /> <span className="hide-sm">Logout</span>
				</a>
			</li>
		</ul>
	);

	const guestLinks = (
		<ul>
			<li>
				<Link to="/register">Register</Link>
			</li>
			<li>
				<Link to="/">Login</Link>
			</li>
		</ul>
	);

	return (
		<nav className="navbar">
			<h1>
				<Link to="/">
					<i className="fab fa-apple" />
				</Link>
			</h1>
			{isAuthenticated ? authLinks : guestLinks}
		</nav>
	);
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
