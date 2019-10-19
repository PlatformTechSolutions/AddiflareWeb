import React from 'react'
import {useQuery, useMutation} from '@apollo/react-hooks';
import {LOGIN} from './data/mutations';
import {Spinner} from 'reactstrap';
import Login from '../Pages/Auth/login';

const authToken = 'Addiflare/token'

export const Loader = () => 
    <div>
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }}  color="primary" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }}  color="secondary" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }}  color="success" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="danger" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="warning" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="info" />
      <Spinner type="grow" style={{ width: '5rem', height: '5rem' }} color="dark" />
    </div>

export const SignIn = ({username, password}) => {
         const {signIn, data} = useMutation(LOGIN,{variables:{username, password}})
        console.log("token", data)
        let t = data?localStorage.setItem(authToken, data.token):false
        return <Login handleSubmit={()=>signIn({username, password})}/>
    }