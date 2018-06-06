import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import Homepage from './Components/Homepage.js';
import Login from './Components/Login';
import Signup from './Components/Signup';

class App extends Component {
  render() {
    return (
      
      <BrowserRouter>
      <Switch>
      <Route path= "/Homepage" component={Homepage}/>
      <Route exact path="/" render={() => (<Redirect to="/Homepage"/>)} />
      <Route path ="/Login" component={Login}/>
      <Route path= "/Signup" component={Signup}/>
        </Switch>
        </BrowserRouter>
      
    );
  }
}

export default App;
