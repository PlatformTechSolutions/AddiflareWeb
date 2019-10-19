import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';

import {CenteredBox} from './Components';
import Home  from './Pages/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { SignIn } from './Container/loginContainer';
// import Home from './Pages/Home/Home';
import Index from './Pages/index';
const client = new ApolloClient({
  uri: 'http://192.168.1.106/graphql/',
  credentials: 'include'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route exact path="/">
            <SignIn/>
          </Route>
          <Route exact path='/home'>
            <Index/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
