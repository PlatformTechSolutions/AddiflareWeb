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
  uri: 'https://yog-ayur.herokuapp.com/graphql/',
  headers: {
    "Authorization": "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQGV4YW1wbGUuY29tIiwiZXhwIjoxNTcwOTg1MjM5LCJvcmlnSWF0IjoxNTcwOTg0OTM5fQ.fLmT6DUffTMpvc9goC0rYN0IiPNpWepc8KzXIo5MDVo"
  },
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
