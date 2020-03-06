import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../actions/auth';
import Alert from '../layout/Alert';

const Login = ({ login, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		login(email, password);
	};
	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/iphone" />;
	}
	return (
		<div className="wrapper-login">
			<Alert />
			<h1 className="large text-primary">Sign In</h1>

			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
						minLength="6"
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			<p className="my-1">
				Have an account? <Link to="/register">Sign up</Link>
			</p>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
