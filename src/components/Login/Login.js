import React from 'react';
import {Link} from 'react-router-dom';

import authRequests from '../firebaseRequests/auth';

import './Login.css';

class Login extends React.Component {
  render () {
    return (
      <div className="Login">
        <h2>Login</h2>
      </div>
    );
  }
}

export default Login;