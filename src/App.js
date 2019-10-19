import React from 'react';
import logo from './logo.svg';
import './App.css';

import {ApolloProvider} from '@apollo/react-hooks'
import ApolloClient from 'apollo-boost';

import {CenteredBox} from './Components';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import { SignIn } from './Container/loginContainer';

const client = new ApolloClient({
  uri: 'http://192.168.1.106/graphql/',
  credentials: 'include'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Switch>
          <Route path="/">
            <SignIn/>
          </Route>
        </Switch>
      </Router>
    </ApolloProvider>
    
  );
}

export default App;
