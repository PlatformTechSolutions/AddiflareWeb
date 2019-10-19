import React, {useState} from 'react';
import {CenteredBox} from '../../Components'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const Login = (props) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    return(
        <CenteredBox>
                <Form>
                    <FormGroup>
                        <Label for="usernameAdi">Username</Label>
                        <Input type="text" name="username" id="usernameAdi" placeholder="Enter the username" onChange={(e)=>setUsername(e.target.value)}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="passwordAdi">Password</Label>
                        <Input type="password" name="password" id="passwordAdi" placeholder="enter the password" onChange={(e)=>setPassword(e.target.value)}/>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" />{' '}
                            Remember Me
                        </Label>
                    </FormGroup>
                <Button color="primary" size="lg" block onClick={()=> props.handleSubmit({username, password})}>Submit</Button>
            </Form>
        </CenteredBox>
    )
    
}

export default Login;