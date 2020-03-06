import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import Alert from '../layout/Alert';

const Register = ({ setAlert, register, isAuthenticated }) => {
	const [ formData, setFormData ] = useState({
		name: '',
		email: '',
		password: '',
		password2: ''
	});

	const { name, email, password, password2 } = formData;

	const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();
		if (password !== password2) {
			setAlert('Passwords do not match', 'danger');
		} else {
			register({ name, email, password });
		}
	};
	if (isAuthenticated) {
		return <Redirect to="/iphone" />;
	}

	return (
		<div className="wrapper-login">
			<Alert />
			<h1 className="large text-primary">Sign Up</h1>

			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input type="text" placeholder="Name" name="name" value={name} onChange={(e) => onChange(e)} />
				</div>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						value={password}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Confirm Password"
						name="password2"
						value={password2}
						onChange={(e) => onChange(e)}
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Register" />
			</form>
			<p className="my-1">
				Have an account? <Link to="/">Sign In</Link>
			</p>
		</div>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
