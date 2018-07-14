import React, { Component } from 'react';
import {Route, BrowserRouter, Redirect, Switch} from 'react-router-dom';
import firebase from 'firebase';

import './App.css';

import Home from '../components/Home/Home';
import Navbar from '../components/Navbar/Navbar';
import AllStuff from '../components/AllStuff/AllStuff';
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
            to={{ pathname: '/allStuff', state: {from: props.location}}}
          />
        )
      }
    />
  );
};

class App extends React.Component {
  state={
    authed: false,
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({authed: true});
      } else {
        this.setState({authed: false});
      }
    });
  }

  componentWillUnmount () {
    this.removeListener();
  }

  byebye = () => {
    this.setState({authed:false});
  }

    render () {
      return (
        <div className="App text-center">
          <BrowserRouter>
            <div>
              <Navbar
              authed={this.state.authed}
              byebye={this.byebye}
              />
              <div className="container">
                <div className="row">
                  <Switch>
                  <Route path="/" exact component={Home}/>
                  <PrivateRoute
                    path="/myStuff"
                    authed={this.state.authed}
                    component={MyStuff}
                  />
                  <PublicRoute
                    path="/register"
                    authed={this.state.authed}
                    component={Register}
                  />
                  <PublicRoute
                    path="/login"
                    authed={this.state.authed}
                    component={Login}
                  />
                  <PrivateRoute
                    path="/allStuff"
                    authed={this.state.authed}
                    component={AllStuff}
                  />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </div>
      );
    }
  }

export default App;
