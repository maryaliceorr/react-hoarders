import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';

import MyStuff from '../components/MyStuff/MyStuff';
import Register from '../components/Register/Register';
import Login from '../components/Login/Login';
import firebaseConnection from '../firebaseRequests/connection';
firebaseConnection();

const PrivateRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === true ? (
          <Component {...props} />
        ): (
          <Redirect
          to={{ pathname: '/login', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

const PublicRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={props =>
        authed === false ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: '/orders', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

import './App.css';

class App extends React.Component {

state = {
  authed: false,
}

  render () {
    return (
      <div className="App text-center">
        <BrowserRouter />
        <MyStuff />
        <Login />
        <Register />
      </div>

    );
  }
}

export default App;
