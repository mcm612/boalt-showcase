import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';
import {
  connect
} from 'react-redux';

const PrivateRoute = ({
    //component renamed as it is destructured
    component: Component,
    //pulling out properties from object in auth prop
    auth: {
      isAuthenticated,
      loading
    },
    ...rest
  }) => (
    //By using render we can pass props to a component rendered by React Router
    <
    Route {
      ...rest
    }
    //{...rest} --> props?
    render = {
      (props) => (!isAuthenticated ? < Redirect to = "/" / > : < Component {
          ...props
        }
        />)} /
        >
      );


      const mapStateToProps = (state) => ({
        auth: state.auth
      });

      export default connect(mapStateToProps)(PrivateRoute);